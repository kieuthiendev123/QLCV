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
using System;
using System.Collections;
namespace PKO.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]

    public class PermissionDetailController : BaseController
    {
         public PermissionDetailController(MainDbContext context, ILogger<PermissionDetailController> logger) : base(context, logger)
        {
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/PermissionDetail/List
        ///     {
        ///        "id": 0
        ///        "name": "demo100",
        ///     }
        /// </remarks>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> List([FromBody] ReferParam param)
        {
            var queryable = _context.PermissionDetails.Where(x => x.CompanyId == CompanyId);
            if (!string.IsNullOrEmpty(param.Name))
            {
                queryable = queryable.Where(x => x.Name.ToUpper().Equals(param.Name.Trim().ToUpper()));
            }
            return await PagingList(queryable, param);
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/PermissionDetail/ListDetail
        ///     {
        ///        "id": 0
        ///        "name": "demo100",
        ///     }
        /// </remarks>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ListDetail([FromBody] ReferParam param)
        {
            var queryable = (from pd in _context.PermissionDetails
                                join p in _context.Permissions on pd.PermissionId equals p.Id
                                select new{
                                     Id = pd.Id,
                                    PermissionId = p.Id,
                                    PermissionName = p.Name,
                                    Name = pd.Name,
                                    CompanyId = pd.CompanyId,
                                }
            );
            if(decimal.TryParse(param.Id.ToString(),out decimal a)){
                queryable = queryable.Where(x => x.Id.Equals(param.Id));
            }  
            if(decimal.TryParse(param.IdP.ToString(),out decimal b)){
                queryable = queryable.Where(x => x.PermissionId.Equals(param.IdP));
            } 
            return await PagingList(queryable, param);
        }
        /// <summary>
        /// Creates an item.
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/PermissionDetail/create
        ///     {
        ///        "PermissionGroupId":1,
        ///        "CompanyId": 0,
        ///        "Code": "PQ000001",
        ///        "Name": "string",
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        [ProducesResponseType(typeof(int), 201)]
        [ProducesResponseType(typeof(PermissionDetail), 400)]
        public IActionResult Create([FromBody] PermissionDetail item)

        {
            if (item == null)
            {
                return BadRequest();
            }

         
            var r = new PermissionDetail();
            r.PermissionId = item.PermissionId;
            r.CompanyId = CompanyId;
            r.Name = item.Name;
            _context.PermissionDetails.Add(r);
            _context.SaveChanges();
            return new ObjectResult(r.Id);
        }

        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/PermissionDetail/Update
        ///     {
        ///        "PermissionDetail" : 1,     
        ///        "Name": "string",
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] PermissionDetail item)
        {
            var r = _context.PermissionDetails.FirstOrDefault(t => t.Id == item.Id && t.CompanyId == CompanyId);
            if (r == null)
            {
                return NotFound();
            }
            r.Name = item.Name;
            _context.PermissionDetails.Update(r);
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
            var todo = _context.PermissionDetails.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.PermissionDetails.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}