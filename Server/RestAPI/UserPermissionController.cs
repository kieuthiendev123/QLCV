using Microsoft.AspNetCore.Mvc;
using PKO.Models;
using PKO.Data;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PKO.Controllers;
using Microsoft.Extensions.Logging;

namespace PKO.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class UserPermissionController : BaseController
    {
        public UserPermissionController(MainDbContext context, ILogger<UserPermissionController> logger) : base(context, logger)
        {
        }

        // /// <summary>
        // /// Get list if item
        // /// </summary>
        // ///<remarks>
        // /// Sample request:
        // ///
        // ///     POST /api/userpermission/list
        // ///     {
        // ///        "id": 1
        // ///     }
        // /// </remarks>
        // /// <returns></returns>
        // [HttpPost]
        // public async Task<IActionResult> List([FromBody] ReferParam param)
        // {
        //     var queryable = (from m in _context.PersonProjects
        //                      join p in _context.Projects on m.ProjectId equals p.Id
        //                      join u in _context.Users on m.UsersId equals u.Id
        //                      select new
        //                      {
        //                          Id = m.Id,
        //                          CompanyId = m.CompanyId,
        //                          ProjectId = m.ProjectId,
        //                          ProjectCode = p.nameProject,
        //                          ProjectName = p.nameProject,
        //                          MemberId = m.UsersId,
        //                          MemberName = u.FullName,
        //                   });
        //     if(!decimal.TryParse(param.Id.ToString(),out decimal a)){
        //         queryable = queryable.Where(x => x.ProjectId.Equals(param.Id));
        //     }                                    
               
        //     return await PagingList(queryable, param);                 
        // }

        /// <summary>
        /// Get item's info
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/userpermission/Get
        ///     {
        ///        "id": 1
        ///     }
        /// </remarks>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpPost("{id}")]
        [ProducesResponseType(typeof(UserPermission), 200)]
        public IActionResult Get(int id)
        {
            var item = _context.UserPermissions.FirstOrDefault(t => t.Id.Equals(id));
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        /// <summary>
        /// Creates an item.
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/userpermission/create
        ///     {
        ///        "CompanyId": "1",
        ///        "UserId": "string",
        ///        "PermissionTypeId": 1
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        [ProducesResponseType(typeof(int), 201)]
        [ProducesResponseType(typeof(UserPermission), 400)]
        public IActionResult Create([FromBody] UserPermission item)

        {
            if (item == null)
            {
                return BadRequest();
            }
            var r = new UserPermission();

            r.CompanyId = CompanyId;
            r.UserId = item.UserId;
            r.PermissionTypeId = item.PermissionTypeId;
            _context.UserPermissions.Add(r);
            _context.SaveChanges();
            return new ObjectResult(r.Id);
        }

        
        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/userpermission/update
        ///     {
        ///        "UserId": "string",
        ///        "PermissionTypeId": 1
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] UserPermission item)
        {
            var r = _context.UserPermissions.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
            r.UserId = item.UserId;
            r.PermissionTypeId = item.PermissionTypeId;
            _context.UserPermissions.Update(r);
            await _context.SaveChangesAsync();
            return Ok();
        }

        /// <summary>
        /// Remove an item
        /// </summary>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var todo = _context.UserPermissions.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.UserPermissions.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}