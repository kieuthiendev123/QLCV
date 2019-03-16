using Microsoft.AspNetCore.Mvc;
using PKO.Models;
using PKO.Data;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace PKO.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class CompanyControllers : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly MainDbContext _context;

        public CompanyControllers(MainDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Company> GetAll()
        {
            return _context.Companys.ToList();
        }

        /// <summary>
        /// Get item's info
        /// </summary>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpGet("{id}", Name = "Companys")]
        public IActionResult GetById(long id)
        {
            var item = _context.Companys.FirstOrDefault(t => t.Id.Equals(id));
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
        ///     POST /api/Company
        ///     {
        ///        "id": 1,
        ///        "name": "Item1"
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>
        [HttpPost]
        [ProducesResponseType(typeof(OtherList), 201)]
        [ProducesResponseType(typeof(OtherList), 400)]
        public IActionResult Create([FromBody] Company item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _context.Companys.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetCompanyList", new { id = item.Id }, item);
        }

        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /Company
        ///     {
        ///        "id": 1,
        ///        "name": "Item1"
        ///     }
        /// </remarks>
        /// <param name="id">id of item</param>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] OtherList item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }

            var todo = _context.OtherLists.FirstOrDefault(t => t.Id.Equals(id));
            if (todo == null)
            {
                return NotFound();
            }
            todo.Name = item.Name;

            _context.OtherLists.Update(todo);
            _context.SaveChanges();

            return new NoContentResult();
        }

        /// <summary>
        /// Remove an item
        /// </summary>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var todo = _context.Companys.FirstOrDefault(t => t.Id.Equals(id));
            if (todo == null)
            {
                return NotFound();
            }

            _context.Companys.Remove(todo);
            _context.SaveChanges();

            return new NoContentResult();
        }
    }
}
