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
    public class AuthController : BaseController
    {
        public AuthController(MainDbContext context, ILogger<AuthController> logger) : base(context, logger)
        {
        }

        // /// <summary>
        // /// Get list if item
        // /// </summary>
        // /// <returns></returns>
        // [HttpPost]
        // // public async Task<IActionResult> List([FromBody] ReferParam param)
        // // {
        // //     var queryable = _context.auths.Where(x => x.CompanyId == CompanyId);
        // //     if (!string.IsNullOrEmpty(param.Code))
        // //     {
        // //         queryable = queryable.Where(x => x.codeAuth.ToUpper().Equals(param.Code.Trim().ToUpper()));
        // //     }
        // //     if (!string.IsNullOrEmpty(param.Name))
        // //     {
        // //         queryable = queryable.Where(x => x.nameAuth.ToUpper().Equals(param.Name.Trim().ToUpper()));
        // //     }
        // //     return await PagingList(queryable, param);
        // // }

        // /// <summary>
        // /// Get item's info
        // /// </summary>
        // /// <remarks>
        // /// Sample request:
        // ///
        // ///     POST /api/Auth/Get
        // ///     {
        // ///        "id": 1
        // ///     }
        // /// </remarks>
        // /// <param name="id">id of item</param>
        // /// <returns></returns>
        // [HttpPost("{id}")]
        // [ProducesResponseType(typeof(auth), 200)]
        // public IActionResult Get(int id)
        // {
        //     var item = _context.auths.FirstOrDefault(t => t.Id.Equals(id));
        //     if (item == null)
        //     {
        //         return NotFound();
        //     }
        //     return new ObjectResult(item);
        // }

        // /// <summary>
        // /// Creates an item.
        // /// </summary>
        // /// <remarks>
        // /// Sample request:
        // ///
        // ///     POST /api/auth/Create
        // ///     {
        // ///        "CompanyId": "1",
        // ///        "codeAuth": "string",
        // ///        "nameAuth": "string",
        // ///        "description": "string",
        // ///        
        // ///     }
        // /// </remarks>
        // /// <param name="item"></param>
        // /// <returns>A newly-created item</returns>
        // /// <response code="201">Returns the newly-created item</response>
        // /// <response code="400">If the item is null</response>  
        // [HttpPost]
        // [ProducesResponseType(typeof(int), 201)]
        // [ProducesResponseType(typeof(auth), 400)]
        // public IActionResult Create([FromBody] auth item)

        // {
        //     if (item == null)
        //     {
        //         return BadRequest();
        //     }
        //     var r = new auth();

        //     r.CompanyId = CompanyId;
        //     r.codeAuth = item.codeAuth;
        //     r.nameAuth = item.nameAuth;
        //     r.description = item.description;
        //     _context.auths.Add(r);
        //     _context.SaveChanges();
        //     return new ObjectResult(r.Id);
        // }

        // /// <summary>
        // /// Update an item
        // /// </summary>
        // /// <remarks>
        // /// Sample request:
        // ///
        // ///     POST /api/auth/Update
        // ///     {
        // ///        "Id": "0",
        // ///        "CompanyId": "1",
        // ///        "codeAuth": "string",
        // ///        "nameAuth": "string",
        // ///        "description": "string",
        // ///        
        // ///     }
        // /// </remarks>
        // /// <param name="item">item</param>
        // /// <returns></returns>
        // [HttpPost]
        // public async Task<IActionResult> Update([FromBody] auth item)
        // {
        //     var r = _context.auths.FirstOrDefault(t => t.Id == item.Id);
        //     if (r == null)
        //     {
        //         return NotFound();
        //     }
        //     r.CompanyId = CompanyId;
        //     r.codeAuth = item.codeAuth;
        //     r.nameAuth = item.nameAuth;
        //     r.description = item.description;
        //     _context.auths.Update(r);
        //     await _context.SaveChangesAsync();
        //     return Ok();
        // }
        // /// <summary>
        // /// Remove an item
        // /// </summary>
        // /// <param name="id">id of item</param>
        // /// <returns></returns>
        // [HttpDelete("{id}")]
        // public async Task<IActionResult> Delete(long id)
        // {
        //     var todo = _context.auths.FirstOrDefault(t => t.Id == id);
        //     if (todo == null)
        //     {
        //         return NotFound();
        //     }
        //     _context.auths.Remove(todo);
        //     await _context.SaveChangesAsync();
        //     return Ok();
        // }
    }
}