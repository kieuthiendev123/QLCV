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

    public class PermissionController : BaseController
    {
         public PermissionController(MainDbContext context, ILogger<PermissionController> logger) : base(context, logger)
        {
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/Permission/List
        ///     {
        ///        "id": 0
        ///        "name": "demo100",
        ///     }
        /// </remarks>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> List([FromBody] ReferParam param)
        {
            var queryable = _context.Permissions.Where(x => x.CompanyId == CompanyId);
            if (!string.IsNullOrEmpty(param.Name))
            {
                queryable = queryable.Where(x => x.Name.ToUpper().Equals(param.Name.Trim().ToUpper()));
            }
            return await PagingList(queryable, param);
        }

        /// <summary>
        /// Get GetAll if item
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Permission> GetAll()
        {
            return _context.Permissions.ToList();
        }

        /// <summary>
        /// Get GetAllWhere if item
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<PerDetail> GetAllWhere(string ids2)
        {   

            // truyền vào 1 chuỗi 
            // chuyển chuỗi thành mảng
            var lstIds = ids2.Split(",");
            // khai báo 1 mảng ids có độ dài bằng lstIds.Length
            long[] ids = new long[lstIds.Length];
            for(var i=0;i<=lstIds.Length - 1; i++) {
                // chuyen ve kieu long
                ids[i] = long.Parse(lstIds[i]);
            }
            var queryable = (from m in _context.Permissions
                             join p in _context.PermissionDetails on m.Id equals p.PermissionId
                             where ids.Contains(long.Parse(m.Id.ToString()))
                             select new PerDetail
                             {
                                 Id = p.Id,
                                 Name = m.Name,
                                 Code = m.Code,
                                 CompanyId = m.CompanyId,
                                 PermissionId = p.PermissionId,
                                 PermissionName = p.Name
                             }).ToList();
             return queryable;
        }
        /// <summary>
        /// Creates an item.
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/Permission/create
        ///     {
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
        [ProducesResponseType(typeof(Permission), 400)]
        public IActionResult Create([FromBody] Permission item)

        {
            if (item == null)
            {
                return BadRequest();
            }

            // lay phan tu cuoi cung lay ID
            var last_item = _context.Permissions.OrderByDescending(u => u.Id).FirstOrDefault();
           

            // Kiểm tra trùng mã
            if (item.Code != null)
            {
                var query = _context.Permissions.Where(x => x.Code == item.Code).FirstOrDefault();
                if (query != null)
                {
                    return BadRequest();
                }
            }

            // Xử lý code tăng dần theo tiền tố
            // Tìm max CODE
            if (last_item != null)
            {
                // Tách chuỗi bỏ tiền tố HH
                var s1 = last_item.Code.Substring(2);
                // Parse Int số thứ tự
                int s2 = Int32.Parse(s1);
                // Tăng dần số thứ tự
                s2 = s2 + 1;
                // LPAD số về chuỗi 0001
                item.Code = "PQ" + s2.ToString().PadLeft(6, '0');
            }
            else
            {
                item.Code = "PQ000001";
            }
            var r = new Permission();
            r.CompanyId = CompanyId;
            r.Code = item.Code;
            r.Name = item.Name;
            _context.Permissions.Add(r);
            _context.SaveChanges();
            return new ObjectResult(r.Id);
        }

        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/Permission/Update
        ///     {
        ///        "PermissionGroupId":1,
        ///        "Name": "string",
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] Permission item)
        {
            var r = _context.Permissions.FirstOrDefault(t => t.Id == item.Id && t.CompanyId == CompanyId);
            if (r == null)
            {
                return NotFound();
            }
            r.Name = item.Name;
            _context.Permissions.Update(r);
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
            var todo = _context.Permissions.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.Permissions.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}