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
    public class OtherListController : BaseController
    {
        public OtherListController(MainDbContext context, ILogger<OtherListController> logger) : base(context, logger)
        {
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/OtherList/List
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
             var queryable = (from m in _context.OtherLists
                             join p in _context.OtherListTypes on m.TypeId equals p.Id
                             select new
                             {
                                 Id = m.Id,
                                 Name = m.Name,
                                 MaDanhMuc = m.MaDM,
                                 Status = m.Status,
                                 Comment = m.Comment,
                                 TypeId = m.TypeId,
                                 TypeName = p.Name,

                             });
            if (!string.IsNullOrEmpty(param.Name))
            {
                queryable = queryable.Where(x => x.Name.ToUpper().Equals(param.Name.Trim().ToUpper()));
            }
            return await PagingList(queryable, param);
        }
         /// <summary>
        /// Get list if item for id = 2
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ListMucDo([FromBody] ReferParam param)
        {
             var queryable = (from m in _context.OtherLists
                             join p in _context.OtherListTypes on m.TypeId equals p.Id
                             select new
                             {
                                 Id = m.Id,
                                 Name = m.Name,
                                 MaDanhMuc = m.MaDM,
                                 Status = m.Status,
                                 Comment = m.Comment,
                                 TypeId = p.Id,
                                 TypeName = p.Name,

                             });
            var a = new decimal();
            if (decimal.TryParse(param.Id.ToString(),out a))
            {
                queryable = queryable.Where(x => x.TypeId == param.Id);
            }
            return await PagingList(queryable, param);
        }
        /// <summary>
        /// Get item's info
        /// </summary>
        /// <param name="id">id of item</param>
        /// <returns></returns>
        [HttpGet("{id}", Name = "OtherList")]
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
        ///     POST /api/OtherList/Create
        ///     {
        ///        "CompanyId": 0,
        ///        "typeId": 1,
        ///        "name": "Item1",
        ///        "MaDM": "LCV000001",
        ///        "Status":1,
        ///        "Comment": "string",
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        [ProducesResponseType(typeof(int), 201)]
        [ProducesResponseType(typeof(OtherList), 400)]
        public IActionResult Create([FromBody] OtherList item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            // tạo mã Danh mục
            string MaDM = "LCV000001";
            var a = _context.OtherLists.Where(x => x.CompanyId == CompanyId).OrderByDescending(x => x.MaDM).FirstOrDefault();
            if (a != null)
            {
                string tmp = a.MaDM.Substring(3);
                int iTmp = int.Parse(tmp);
                MaDM = "LCV" + (iTmp + 1).ToString().PadLeft(6, '0');
            }
            var r = new OtherList();

            r.CompanyId = CompanyId;
            r.Name = item.Name;
            r.TypeId = item.TypeId;
            r.MaDM = MaDM;
            r.Status = item.Status;
            r.Comment = item.Comment;
            _context.OtherLists.Add(r);
            _context.SaveChanges();
            return new ObjectResult(r.Id);
        }
        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/OtherList/Update
        ///     {
        ///        "CompanyId": 0,
        ///        "name": "Item1",
        ///         "Status" = 1;
        ///         "Comment" = "string";
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] OtherList item)
        {
            var r = _context.OtherLists.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
            r.Name = item.Name;
            r.TypeId = item.TypeId;
            r.Status = item.Status;
            r.Comment = item.Comment;
            _context.OtherLists.Update(r);
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
            var todo = _context.OtherLists.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.OtherLists.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}