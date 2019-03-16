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
    public class ProjectController : BaseController
    {
        public ProjectController(MainDbContext context, ILogger<ProjectController> logger) : base(context, logger)
        {
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> List([FromBody] ReferParam param)
        {
            var queryable = _context.Projects.Where(x => x.CompanyId == CompanyId);
            if (!string.IsNullOrEmpty(param.Code))
            {
                queryable = queryable.Where(x => x.codeProject.ToUpper().Equals(param.Code.Trim().ToUpper()));
            }
            if (!string.IsNullOrEmpty(param.Name))
            {
                queryable = queryable.Where(x => x.nameProject.ToUpper().Equals(param.Name.Trim().ToUpper()));
            }
            return await PagingList(queryable, param);
        }

        /// <summary>
        /// Get item's info
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/Project/Get
        ///     {
        ///        "id": 1
        ///     }
        /// </remarks>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpPost("{id}")]
        [ProducesResponseType(typeof(Project), 200)]
        public IActionResult Get(int id)
        {
            var item = _context.Profiles.FirstOrDefault(t => t.Id.Equals(id));
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
        ///     POST /api/project/Create
        ///     {
        ///        "CompanyId": "1",
        ///        "codeProject": "string",
        ///        "nameProject": "string",
        ///        "startDate": "0/0/2018",
        ///        "endDate": "0/0/2018",
        ///        "note": "string"
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        [ProducesResponseType(typeof(int), 201)]
        [ProducesResponseType(typeof(Project), 400)]
        public IActionResult Create([FromBody] Project item)

        {
            if (item == null)
            {
                return BadRequest();
            }
            var r = new Project();

            r.CompanyId = CompanyId;
            r.codeProject = item.codeProject;
            r.nameProject = item.nameProject;
            r.startDate = item.startDate;
            r.endDate = item.endDate;
            r.note = item.note;
            
            _context.Projects.Add(r);
            _context.SaveChanges();
            return new ObjectResult(r.Id);
        }

        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/DmCongViec/Update
        ///     {
        ///        "Id": "0",
        ///        "CompanyId": "1",
        ///        "codeProject": "string",
        ///        "nameProject": "string",
        ///        "startDate": "0/0/2018",
        ///        "endDate": "0/0/2018",
        ///        "note": "string"
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] Project item)
        {
            var r = _context.Projects.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
             r.CompanyId = CompanyId;
            r.codeProject = item.codeProject;
            r.nameProject = item.nameProject;
            r.startDate = item.startDate;
            r.endDate = item.endDate;
            r.note = item.note;
            _context.Projects.Update(r);
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
            var todo = _context.Projects.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.Projects.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}