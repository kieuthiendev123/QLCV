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

    public class PerDetailGroupController : BaseController
    {
         public PerDetailGroupController(MainDbContext context, ILogger<PerDetailGroupController> logger) : base(context, logger)
        {
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/PerDetailGroup/List
        ///     {
        ///        "id": 0
        ///        "name": "demo100",
        ///     }
        /// </remarks>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> List([FromBody] ReferParam param)
        {
            var queryable = _context.PerDetailGroups.Where(x => x.CompanyId == CompanyId);
            // if (!string.IsNullOrEmpty(param.Id))
            // {
            //     queryable = queryable.Where(x => x.Pre.ToUpper().Equals(param.Name.Trim().ToUpper()));
            // }
            return await PagingList(queryable, param);
        }

        /// <summary>
        /// Creates an item.
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/PerDetailGroup/create
        ///     {
        ///        "PermissionDetailId":1,
        ///        "PermissionGroupId":1    
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        [ProducesResponseType(typeof(int), 201)]
        [ProducesResponseType(typeof(PerDetailGroup), 400)]
        public IActionResult Create([FromBody] PerDetailGroup item)

        {
            if (item == null)
            {
                return BadRequest();
            }

         
            var r = new PerDetailGroup();
             r.CompanyId = CompanyId;
            r.PermissionDetailId = item.PermissionDetailId;
            r.PermissionGroupId = item.PermissionGroupId;
            _context.PerDetailGroups.Add(r);
            _context.SaveChanges();
            return new ObjectResult(r.Id);
        }

        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/PerDetailGroup/Update
        ///     {
        ///        "PermissionDetailId" : 1,     
        ///        "PermissionGroupId": 1,
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] PerDetailGroup item)
        {
            var r = _context.PerDetailGroups.FirstOrDefault(t => t.Id == item.Id && t.CompanyId == CompanyId);
            if (r == null)
            {
                return NotFound();
            }
            r.PermissionDetailId = item.PermissionDetailId;
            r.PermissionGroupId = item.PermissionGroupId;
            _context.PerDetailGroups.Update(r);
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
            var todo = _context.PerDetailGroups.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.PerDetailGroups.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}