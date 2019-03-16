using Microsoft.AspNetCore.Mvc;
using PKO.Models;
using PKO.Data;
using System.Linq;
using System;
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
    public class CommentController : BaseController
    {
        public CommentController(MainDbContext context, ILogger<CommentController> logger) : base(context, logger)
        {
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> List([FromBody] ReferParam param)
        {
            var queryable = _context.Comments.Where(x => x.CompanyId == CompanyId);
            if (!string.IsNullOrEmpty(param.Code))
            {
                queryable = queryable.Where(x => x.CodeComment.ToUpper().Equals(param.Code.Trim().ToUpper()));
            }
            if (!string.IsNullOrEmpty(param.Name))
            {
                queryable = queryable.Where(x => x.Content.ToUpper().Equals(param.Name.Trim().ToUpper()));
            }
            return await PagingList(queryable, param);
        }

        /// <summary>
        /// Get item's info
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/DmCongViec/Get
        ///     {
        ///        "id": 1
        ///     }
        /// </remarks>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpPost("{id}")]
        [ProducesResponseType(typeof(Comment), 200)]
        public IActionResult Get(int id)
        {
            var item = _context.Comments.FirstOrDefault(t => t.Id.Equals(id));
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
        ///     POST /api/Comment/Create
        ///     {
        ///        "personComment": "string",
        ///        "content": "string",
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        [ProducesResponseType(typeof(int), 201)]
        [ProducesResponseType(typeof(Comment), 400)]
        public IActionResult Create([FromBody] Comment item)

        {
            if (item == null)
            {
                return BadRequest();
            }
            
            var r = new Comment();
             // tạo mã Danh mục
            string CodeComment = "CMT000001";
            var a = _context.Comments.Where(x => x.CompanyId == CompanyId).OrderByDescending(x => x.CodeComment).FirstOrDefault();
            if (a != null)
            {
                string tmp = a.CodeComment.Substring(3);
                int iTmp = int.Parse(tmp);
                CodeComment = "CMT" + (iTmp + 1).ToString().PadLeft(6, '0');
            }
            r.CompanyId = CompanyId;
            r.CodeComment = CodeComment;
            r.TimeComment = DateTime.Now;
            r.IdPersonComment = item.IdPersonComment;
            r.Content = item.Content;
            _context.Comments.Add(r);
            _context.SaveChanges();
            return new ObjectResult(r.Id);
        }
        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/Comment/Update
        ///     {
        ///        "id": 1,
        ///        "CompanyId": 1,
        ///        "codeComment": "string",
        ///        "timeComment": "0/0/2018",
        ///        "personComment": "string",
        ///        "content": "string",
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] Comment item)
        {
            var r = _context.Comments.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
            
            r.CompanyId = CompanyId;
            r.CodeComment = item.CodeComment;
            r.TimeComment = DateTime.Now.Date;
            r.IdPersonComment = item.IdPersonComment;
            r.Content = item.Content;
            _context.Comments.Update(r);
            await _context.SaveChangesAsync();
            return Ok();
        }
        /// <summary>
        /// Remove an item
        /// </summary>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var todo = _context.Comments.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.Comments.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}