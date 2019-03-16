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
    public class OtherListTypeController : BaseController
    {
        public OtherListTypeController(MainDbContext context, ILogger<OtherListTypeController> logger) : base(context, logger)
        {
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/otherlisttype/List
        ///     {
        ///        "id": 0
        ///        "name": "demo100",
        ///         "typeid" : 0
        ///     }
        /// </remarks>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> List([FromBody] ReferParam param)
        {
            var queryable = _context.OtherListTypes.Where(x => x.CompanyId == CompanyId);
            if (!string.IsNullOrEmpty(param.Name))
            {
                queryable = queryable.Where(x => x.Name.ToUpper().Equals(param.Name.Trim().ToUpper()));
            }
            return await PagingList(queryable, param);
        }


        /// <summary>
        /// Danh mục dùng theo parent
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     GET /api/cls/ListByParent?parent=
        /// 
        /// </remarks>
        /// <returns></returns>
        [HttpPost("{id}")]
        [ProducesResponseType(typeof(OtherListType), 200)]
        public IActionResult Get(int id)
        {
            var item = _context.OtherListTypes.FirstOrDefault(t => t.Id.Equals(id));
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
        ///     POST /api/otherlisttype/Create
        ///     {
        ///        "CompanyId": 0,
        ///        "name": "Item1"
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        [ProducesResponseType(typeof(int), 201)]
        [ProducesResponseType(typeof(OtherListType), 400)]
        public IActionResult Create([FromBody] OtherListType item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var r = new OtherListType();

            r.CompanyId = CompanyId;
            r.Name = item.Name;
            _context.OtherListTypes.Add(r);
            _context.SaveChanges();
            return new ObjectResult(r.Id);
        }
        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/otherlisttype/Update
        ///     {
        ///        "CompanyId": 0,
        ///        "name": "Item1"
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] OtherListType item)
        {
            var r = _context.OtherListTypes.FirstOrDefault(t => t.Id == item.Id && t.CompanyId == CompanyId);
            if (r == null)
            {
                return NotFound();
            }
            r.Name = item.Name;
            _context.OtherListTypes.Update(r);
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
            var todo = _context.OtherListTypes.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.OtherListTypes.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}