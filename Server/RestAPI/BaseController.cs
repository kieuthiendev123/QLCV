using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PKO.Data;
using PKO.Models;

namespace PKO.Controllers
{
    public class BaseController : Microsoft.AspNetCore.Mvc.Controller
    {
        protected readonly MainDbContext _context;
        protected readonly ILogger _logger;

        public BaseController(
            MainDbContext context,
            ILogger logger)
        {
            _context = context;
            _logger = logger;
        }

        protected JsonResult Error(string message)
        {
            return new JsonResult(new { Message = message }) { StatusCode = 400 };
        }

        protected JsonResult Error()
        {
            var validationErrors =
                    ModelState.Values.Where(E => E.Errors.Count > 0)
                    .SelectMany(E => E.Errors)
                    .Select(E => E.ErrorMessage)
                    .ToArray();
            return new JsonResult(new ErrorResponse { Message = validationErrors }) { StatusCode = 400 };
        }

        protected async Task<IActionResult> PagingList<T>(IQueryable<T> list, Paging param)
        {
            int skip = (param.PageNo - 1) * param.PageSize;
            int count = await list.CountAsync();
            var q = list.Skip((param.PageNo - 1) * Consts.PAGE_SIZE).Take(Consts.PAGE_SIZE);
            var r = await q.ToListAsync();
            return Ok(new PagedResult<T>(r, param.PageNo, param.PageSize, count));
        }

        protected string CompanyCode
        {
            get
            {
                if (RouteData.Values.ContainsKey("company_code"))
                {
                    return RouteData.Values.First(p => p.Key.Equals("company_code")).Value.ToString();
                }
                else
                {
                    return "";
                }
            }
        }

        protected int CompanyId
        {
            get
            {
                var companyId = User.Claims.Where(p => p.Type.Equals(JwtRegisteredClaimNames.Sid)).FirstOrDefault();
                if (companyId == null)
                {
                    return 0;
                }
                else
                {
                    return int.Parse(companyId.Value);
                }
            }
        }

        protected string UserId
        {
            get
            {
                var userId = User.Claims.Where(p => p.Type.Equals(JwtRegisteredClaimNames.Azp)).FirstOrDefault();
                if (userId == null)
                {
                    return string.Empty;
                }
                else
                {
                    return userId.Value;
                }
            }
        }
    }
}
