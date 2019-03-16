using System;
using System.Collections;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PKO.Data;
using PKO.Extensions;
using PKO.Models;
using PKO.Options;
using PKO.Services;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace PKO.Controllers {
    [Route ("api/[controller]/[action]")]
    [Produces ("application/json")]
    public class AccountController : BaseController {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly JWTSettings _options;
        private readonly IEmailSender _emailSender;

        public AccountController (
            MainDbContext context,
            ILogger<AccountController> logger,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IOptions<JWTSettings> optionsAccessor,
            IEmailSender emailSender) : base (context, logger) {
            _userManager = userManager;
            _signInManager = signInManager;
            _options = optionsAccessor.Value;
            _emailSender = emailSender;
        }

        [TempData]
        public string ErrorMessage { get; set; }

        /// <summary>
        /// Signin
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/account/signin
        ///     {
        ///         "Username":"demo100",
        ///         "Password": "Demo100",
        ///         "Company": "demo100"
        ///     }
        ///
        /// </remarks>
        /// <param name="Credentials"></param>
        /// <returns>token string</returns>
        /// <response code="400">Bad Request</response>
        /// <response code="200">Success</response>
        [SwaggerResponse (200, Type = typeof (LoginResponse))]
        [SwaggerResponse (400, Type = typeof (ErrorResponse))]
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> SignIn ([FromBody] LoginParam Credentials) {
            if (ModelState.IsValid) {
                var storeUserName = Credentials.Company.ToUpper () + '_' + Credentials.Username.ToUpper ();
                var user = await _userManager.FindByNameAsync(storeUserName);
                if (user != null) {
                    var result = await _signInManager.CheckPasswordSignInAsync (user, Credentials.Password, false);
                    if (result.Succeeded) {
                        if (user.Status == 1) {
                            return Ok (new LoginResponse { token = GetAccessToken (user) });
                        }
                    }
                }
                return new JsonResult ("Unable to sign in") { StatusCode = 401 };
            } else {
                return Error ();
            }
        }

        /// <summary>
        /// Logout
        /// </summary>
        /// <returns></returns>
        /// <response code="400">Bad Request</response>
        /// <response code="200">Success</response>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Logout () {
            await _signInManager.SignOutAsync ();
            _logger.LogInformation ("User logged out.");
            return Ok ();
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <returns></returns>
        [Authorize (AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task<IActionResult> List ([FromBody] UserSearchParam param) {
            var queryable = _context.Users.Where (x => x.CompanyId == CompanyId);
            if (!string.IsNullOrEmpty (param.Username)) {
                queryable = queryable.Where (x => x.UserName.ToUpper ().Contains (param.Username.Trim ().ToUpper ()));
            }
            if (!string.IsNullOrEmpty (param.Fullname)) {
                queryable = queryable.Where (x => x.FullName.ToUpper ().Contains (param.Fullname.Trim ().ToUpper ()));
            }
            return await PagingList (queryable, param);
        }

        /// <summary>
        /// Register
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/account/register
        ///     {
        /// 	    "Username": "demo100",
        /// 	    "Company": "demo100",
        /// 	    "Fullname": "demo100",
        /// 	    "CompanyName": "demo100",
        /// 	    "Password": "Demo100",
        /// 	    "Provider": "self",
        /// 	    "Email": "demo100@gmail.com",
        /// 	    "Mobile": "0123456789",
        ///         "PermissionId" : "1",
        ///         "Comment" : "comment",
        ///         "Address" : "Hà Nội",    
        ///         "PhoneNumber" : "0123456"
        ///     }
        ///
        /// </remarks>
        /// <param name="RegisterForm"></param>
        /// <returns>token string</returns>
        /// <response code="400">Bad Request</response>
        /// <response code="200">Success</response>
        [SwaggerResponse (200, Type = typeof (LoginResponse))]
        [SwaggerResponse (400, Type = typeof (ErrorResponse))]
        [AllowAnonymous]
        [HttpPost]

        public async Task<IActionResult> Register ([FromBody] RegisterParam RegisterForm) {
         
            if (ModelState.IsValid) {
                // kiểm tra người giới thiệu
                User UserRef = null;
                if (!String.IsNullOrEmpty (RegisterForm.RefCode)) {
                    UserRef = await _context.Users.FirstOrDefaultAsync (t => t.RefCode.Equals (RegisterForm.RefCode));

                    if (UserRef == null) {
                        return Error ("User Ref is not found");
                    }
                }

                // Kiểm tra mã Công việc đã có chưa
                var checkCompany = await _context.Companys.FirstOrDefaultAsync (w => w.Code.Equals (RegisterForm.CompanyName));

                if (checkCompany != null) {
                    return Error ("Company is exists");
                }
                // tao ma nhan vien
                string MaNV = "NV000001";
                var a = _context.Users.Where (x => x.CompanyId == CompanyId).OrderByDescending (x => x.MaNV).FirstOrDefault ();
                if (a != null) {
                    string tmp = a.MaNV.Substring (2);
                    int iTmp = int.Parse (tmp);
                    MaNV = "NV" + (iTmp + 1).ToString ().PadLeft (6, '0');
                }
                // Tạo Công việc Company
                var company = new Company {
                    Name = RegisterForm.CompanyName,
                    Code = RegisterForm.CompanyName.ToLower (),
                    OwnerName = RegisterForm.Fullname,
                    UserRef = UserRef,
                };
                var r = await _context.Companys.AddAsync (company);

                if (r.State != EntityState.Added) {
                    return Error ("Can not create Company");
                }

                var storeUserName = RegisterForm.CompanyName + '_' + RegisterForm.Username;
                var user = new User {
                    UserName = storeUserName,
                    Email = RegisterForm.Email,
                    CompanyId = company.Id,
                    RefCode = RegisterForm.RefCode,
                    Level = UserLevel.OWNER,
                    Status = 1,
                    FullName = RegisterForm.Fullname,
                    Comment = RegisterForm.Comment,
                    Address = RegisterForm.Address,
                    PhoneNumber = RegisterForm.PhoneNumber,
                    MaNV = MaNV

                };
                var result = await _userManager.CreateAsync (user, RegisterForm.Password);
                if (result.Succeeded) {
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync (user);
                    var callbackUrl = Url.EmailConfirmationLink (user.Id, code, Request.Scheme);
                    await _emailSender.SendEmailConfirmationAsync (RegisterForm.Email, callbackUrl);

                    await _signInManager.SignInAsync (user, isPersistent : false);

                    await _context.SaveChangesAsync ();
                    _logger.LogInformation ("User created a new account with password.");

                    return Ok (new LoginResponse { token = GetAccessToken (user) });
                }

                // Xóa Company nếu không tạo user thành công
                _context.Companys.Remove (company);
                await _context.SaveChangesAsync ();

                return Errors (result);

            } else {
                return Error ();
            }
        }
        /// <summary>
        /// CreateUser
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/account/create
        ///     {
        ///         "Id" :1,
        /// 	    "Username": "demo100",
        /// 	    "Fullname": "demo100",
        /// 	    "Password": "Demo100",
        /// 	    "Email": "demo100@gmail.com",
        ///         "Status" : "1", 
        ///         "PermissionId" : "1",
        ///         "Comment" : "comment",
        ///         "Address" : "Hà Nội",
        ///         "OtherListId":1,
        ///         "OtherListName":"Develop",
        ///         "PhoneNumber":"123456"
        ///     }
        ///
        /// </remarks>
        /// <response code="400">Bad Request</response>
        /// <response code="200">Success</response>
        [Authorize (AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task<IActionResult> Create ([FromBody] UserParam UserForm) {
            if (ModelState.IsValid) {

                // Kiểm tra tài khoan đã tồn tại chưa
                var r = await _context.Companys.FirstOrDefaultAsync (w => w.Id == CompanyId);
                if (r == null) {
                    return Error ("Company not exists");
                }

                // tao ma nhan vien
                string MaNV = "NV000001";
                var a = _context.Users.Where (x => x.CompanyId == CompanyId).OrderByDescending (x => x.MaNV).FirstOrDefault ();
                if (a != null) {
                    string tmp = a.MaNV.Substring (2);
                    int iTmp = int.Parse (tmp);
                    MaNV = "NV" + (iTmp + 1).ToString ().PadLeft (6, '0');
                }

                string User = r.Code.ToUpper () + "_" + UserForm.Username.ToUpper ();

                var checkUser = await _context.Users.FirstOrDefaultAsync (w => w.UserName.Equals (User));

                if (checkUser != null) {
                    return Error ("User is exists");
                }

                var user = new User {
                    UserName = User,
                    Email = UserForm.Email,
                    CompanyId = r.Id,
                    Level = UserLevel.OWNER,
                    FullName = UserForm.Fullname,
                    Status = UserForm.Status,
                    PermissionId = UserForm.PermissionId,
                    Comment = UserForm.Comment,
                    Address = UserForm.Address,
                    OtherListId = UserForm.OtherListId,
                    OtherListName = UserForm.OtherListName,
                    PhoneNumber = UserForm.PhoneNumber,
                    MaNV = MaNV
                };
                var result = await _userManager.CreateAsync (user, UserForm.Password);
                if (result.Succeeded) {
                    return Ok ();
                }
                return Errors (result);
            } else {
                return Error ();
            }
        }

        /// <summary>
        /// UpdateUser
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/account/update
        ///     {
        ///         "Id" :"ad",
        /// 	    "Username": "demo100",
        /// 	    "Fullname": "demo100",
        /// 	    "Password": "Demo100",
        /// 	    "Email": "demo100@gmail.com",
        ///         "Status" : "1", 
        ///         "PermissionId" : "1",
        ///         "Comment" : "comment",
        ///         "Address" : "Hà Nội",
        ///         "OtherListId":1,
        ///         "OtherListName":"Develop",
        ///         "PhoneNumber":"123456789"
        ///     }
        ///
        /// </remarks>
        /// <response code="400">Bad Request</response>
        /// <response code="200">Success</response>
        [Authorize (AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task<IActionResult> UpdateUser ([FromBody] UserParam UserForm) {
            var r = _context.Users.FirstOrDefault (t => t.Id == UserForm.Id);
            if (r == null) {
                return NotFound ();
            }
            var rq = await _context.Companys.FirstOrDefaultAsync (w => w.Id == CompanyId);
            if (rq == null) {
                return Error ("Company not exists");
            }
            r.Email = UserForm.Email;
            r.CompanyId = rq.Id;
            r.Level = UserLevel.OWNER;
            r.FullName = UserForm.Fullname;
            r.Status = UserForm.Status;
            r.PermissionId = UserForm.PermissionId;
            r.Comment = UserForm.Comment;
            r.Address = UserForm.Address;
            r.OtherListId = UserForm.OtherListId;
            r.OtherListName = UserForm.OtherListName;
            r.PhoneNumber = UserForm.PhoneNumber;
            _context.Users.Update (r);
            await _context.SaveChangesAsync ();
            return Ok ();
        }

        /// <summary>
        /// Remove an item
        /// </summary>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpDelete ("{id}")]
        public async Task<IActionResult> Delete (string id) {
            var todo = _context.Users.FirstOrDefault (t => t.Id == id);
            if (todo == null) {
                return NotFound ();
            }
            _context.Users.Remove (todo);
            await _context.SaveChangesAsync ();
            return Ok ();
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail (string userId, string code) {
            if (userId == null || code == null) {
                return RedirectToAction (nameof (HomeController.Index), "Home");
            }
            var user = await _userManager.FindByIdAsync (userId);
            if (user == null) {
                throw new ApplicationException ($"Unable to load user with ID '{userId}'.");
            }
            var result = await _userManager.ConfirmEmailAsync (user, code);
            return View (result.Succeeded ? "ConfirmEmail" : "Error");
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ResetPassword (ResetPasswordParam model) {
            if (!ModelState.IsValid) {
                return View (model);
            }
            var user = await _userManager.FindByEmailAsync (model.Email);
            if (user != null) {
                var result = await _userManager.ResetPasswordAsync (user, model.Code, model.Password);
                if (result.Succeeded) {
                    return Ok ();
                }
            }
            return NotFound ();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ForgotPassword (ForgotPasswordParam model) {
            if (ModelState.IsValid) {
                var user = await _userManager.FindByEmailAsync (model.Email);
                if (user == null || !(await _userManager.IsEmailConfirmedAsync (user))) {
                    // Don't reveal that the user does not exist or is not confirmed
                    return BadRequest ("The user does not exist or is not confirmed");
                }

                // For more information on how to enable account confirmation and password reset please
                // visit https://go.microsoft.com/fwlink/?LinkID=532713
                var code = await _userManager.GeneratePasswordResetTokenAsync (user);
                var callbackUrl = Url.ResetPasswordCallbackLink (user.Id, code, Request.Scheme);
                await _emailSender.SendEmailAsync (model.Email, "Reset Password",
                    $"Please reset your password by clicking here: <a href='{callbackUrl}'>link</a>");
                return Ok ();
            }

            // If we got this far, something failed, redisplay form
            return BadRequest ();
        }

        private string GetAccessToken (User user) {
            var claims = new [] {
                new Claim (JwtRegisteredClaimNames.Sub, user.Email),
                new Claim (JwtRegisteredClaimNames.Azp, user.Id),
                new Claim (JwtRegisteredClaimNames.Website, user.Level.ToString ()),
                new Claim (JwtRegisteredClaimNames.Jti, Guid.NewGuid ().ToString ()),
                new Claim (JwtRegisteredClaimNames.Sid, user.CompanyId.ToString ())
            };
            return GetToken (claims);
        }

        private string GetToken (Claim[] claims) {
            var token = new JwtSecurityToken (
                issuer: _options.Issuer,
                audience: _options.Audience,
                claims: claims,
                expires: DateTime.UtcNow.AddDays (1),
                notBefore: DateTime.UtcNow,
                signingCredentials: new SigningCredentials (new SymmetricSecurityKey (Encoding.UTF8.GetBytes (_options.SecretKey)),
                    SecurityAlgorithms.HmacSha256)
            );

            return new JwtSecurityTokenHandler ().WriteToken (token);
        }

        private JsonResult Errors (IdentityResult result) {
            var items = result.Errors
                .Select (x => x.Description)
                .ToArray ();
            return new JsonResult (new ErrorResponse { Message = items }) { StatusCode = 400 };
        }

    }
}