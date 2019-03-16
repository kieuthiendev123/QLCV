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
    public class SprintController : BaseController
    {
        public SprintController(MainDbContext context, ILogger<SprintController> logger) : base(context, logger)
        {
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> List([FromBody] ReferParam param)
        {
            var queryable = _context.Sprints.Where(x => x.CompanyId == CompanyId);
            return await PagingList(queryable, param);
        }

        /// <summary>
        /// Get item's info
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/Sprint/Get
        ///     {
        ///        "id": 1
        ///     }
        /// </remarks>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpPost("{id}")]
        [ProducesResponseType(typeof(Sprint), 200)]
        public IActionResult Get(int id)
        {
            var item = _context.Sprints.FirstOrDefault(t => t.Id.Equals(id));
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
        ///     POST /api/Sprint/Create
        ///     {
        ///        "CompanyId": 1,
        ///        "idProject": 0,
        ///        "nameSprint": "string",
        ///        "startDate": "1/1/2018",
        ///        "endDate": "1/1/2018",
        ///        "timeExtension": "1/1/2018",
        ///        "statusSprint":0,
        ///        "Note":"string"    
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        [ProducesResponseType(typeof(int), 201)]
        [ProducesResponseType(typeof(Sprint), 400)]
        public IActionResult Create([FromBody] Sprint item)

        {
            if (item == null)
            {
                return BadRequest();
            }
            string codeSprint = "SP001";
            var a = _context.Sprints.Where(x => x.CompanyId == CompanyId).OrderByDescending(x => x.codeSprint).FirstOrDefault();
            if (a != null)
            {
                string tmp = a.codeSprint.Substring(2);
                int iTmp = int.Parse(tmp);
                codeSprint = "SP" + (iTmp + 1).ToString().PadLeft(3, '0');
            }
            var r = new Sprint();
            r.CompanyId = CompanyId;
            r.codeSprint = codeSprint;
            r.idProject = item.idProject;
            r.nameSprint = item.nameSprint;
            r.startDate = item.startDate;
            r.endDate = item.endDate;
            r.timeExtension = item.timeExtension;
            r.statusSprint = item.statusSprint;
            r.Note = item.Note;
            _context.Sprints.Add(r);
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
        ///        "Id": 1,
        ///        "CompanyId": 1,
        ///        "idProject": 0,
        ///        "nameSprint": "string",
        ///        "startDate": "1/1/2018",
        ///        "endDate": "1/1/2018",
        ///        "timeExtension": "1/1/2018",
        ///        "statusSprint":0,
        ///        "Note":"string"    
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] Sprint item)
        {
            var r = _context.Sprints.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
            r.CompanyId = CompanyId;
            r.idProject = item.idProject;
            r.nameSprint = item.nameSprint;
            r.startDate = item.startDate;
            r.endDate = item.endDate;
            r.timeExtension = item.timeExtension;
            r.statusSprint = item.statusSprint;
            r.Note = item.Note;
            _context.Sprints.Update(r);
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
            var todo = _context.Sprints.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.Sprints.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}