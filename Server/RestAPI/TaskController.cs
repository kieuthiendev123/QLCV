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
    public class CongViecController : BaseController
    {
        public CongViecController(MainDbContext context, ILogger<CongViecController> logger) : base(context, logger)
        {
        }

        /// <summary>
        /// Get list if item
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> List([FromBody] ReferParam param)
        {
            var queryable = _context.ProjectTasks.Where(x => x.CompanyId == CompanyId);
           
            if (!string.IsNullOrEmpty(param.Name))
            {
                queryable = queryable.Where(x => x.NameCV.ToUpper().Equals(param.Name.Trim().ToUpper()));
            }  
            var a = new decimal();
            if (decimal.TryParse(param.Status.ToString(),out a))
            {
                queryable = queryable.Where(x => x.PStatus == param.Status);
            }
            var b = new decimal();
            if (decimal.TryParse(param.Id_Project.ToString(),out b))
            {
                queryable = queryable.Where(x => x.IdDuAn == param.Id_Project);
            }
            var c = new decimal();
            if (decimal.TryParse(param.Id_Sprint.ToString(),out c))
            {
                queryable = queryable.Where(x => x.IdSprint == param.Id_Sprint);
            }
            return await PagingList(queryable, param);
        }
         /// <summary>
        /// Get list if item
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ListSprint([FromBody] ReferParam param)
        {
                var queryable = (from m in _context.Sprints
                             join p in _context.Projects on m.idProject equals p.Id
                             select new
                             {
                                 Id = m.Id,
                                 CompanyId = m.CompanyId,
                                 IdDuAn = p.Id,
                                 ProjectName = p.nameProject,
                                 IdSprint = m.Id,
                                 NameSprint = m.nameSprint
                          });
            queryable = queryable.Where(x => x.IdDuAn == param.Id_Project);
            return await PagingList(queryable, param);
        }
        /// <summary>
        /// Get list producttask of project of sprint 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ListProjectTask([FromBody] ReferParam param)
        {
            var queryable = (from m in _context.ProjectTasks
                             join p in _context.Projects on m.IdDuAn equals p.Id
                             join u in _context.Sprints on m.IdSprint equals u.Id
                             select new
                             {
                                 Id = m.Id,
                                 CompanyId = m.CompanyId,
                                 IdDuAn = p.Id,
                                 IdSprint = u.Id,
                                 ProjectName = p.nameProject,

                          });
        var a = new decimal();
            if (decimal.TryParse(param.Id_Project.ToString(),out a))
            {
                queryable = queryable.Where(x => x.IdDuAn == param.Id_Project);
            }
        var b = new decimal();
            if (decimal.TryParse(param.Id_Sprint.ToString(),out b))
            {
                queryable = queryable.Where(x => x.IdDuAn == param.Id_Sprint);
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
        [ProducesResponseType(typeof(ProjectTask), 200)]
        public IActionResult Get(int id)
        {
            var item = _context.ProjectTasks.FirstOrDefault(t => t.Id.Equals(id));
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
        ///     POST /api/DmCongViec/Create
        ///     {
        ///        "IdDuAn":1,
        ///        "IdSprint":1,
        ///        "nameCV": "string",
        ///        "typeCV": "string",
        ///        "Overview": "string",
        ///        "contentTask": "string",
        ///        "timeTask": "string",
        ///        "levelTask": "1",
        ///        "IdNguoiTaoViec": 0,
        ///        "IdNguoiGanViec": 0,
        ///        "Status" :1
        ///     }
        /// </remarks>
        /// <param name="item"></param>
        /// <returns>A newly-created item</returns>
        /// <response code="201">Returns the newly-created item</response>
        /// <response code="400">If the item is null</response>  
        [HttpPost]
        [ProducesResponseType(typeof(int), 201)]
        [ProducesResponseType(typeof(ProjectTask), 400)]
        public IActionResult Create([FromBody] ProjectTask item)

        {
            if (item == null)
            {
                return BadRequest();
            }
            // tạo mã Danh mục
            string codeCV = "QLCV001";
            var a = _context.ProjectTasks.Where(x => x.CompanyId == CompanyId).OrderByDescending(x => x.CodeCV).FirstOrDefault();
            if (a != null)
            {
                string tmp = a.CodeCV.Substring(4);
                int iTmp = int.Parse(tmp);
                codeCV = "QLCV" + (iTmp + 1).ToString().PadLeft(3, '0');
            }
            var r = new ProjectTask();
            r.CompanyId = CompanyId;
            r.IdDuAn = item.IdDuAn;
            r.IdSprint = item.IdSprint;
            r.NameCV = item.NameCV;
            r.CodeCV = codeCV;
            r.TypeCV = item.TypeCV;
            r.LevelTask = item.LevelTask;
            r.TimeTask = item.TimeTask;
            r.Overview = item.Overview;
            r.ContentTask = item.ContentTask;
            r.IdNguoiGanViec = item.IdNguoiGanViec;
            r.IdNguoiTaoViec = item.IdNguoiTaoViec;
            r.PStatus = item.PStatus;
            _context.ProjectTasks.Add(r);
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
        ///        "Id": 1,
        ///        "CompanyId": 1,
        ///        "IdDuAn":1,
        ///        "IdSprint":1,
        ///        "codeCV":"string",
        ///        "nameCV": "string",
        ///        "typeCV": "string",
        ///        "Overview": "string",
        ///        "contentTask": "string",
        ///        "timeTask": "string",
        ///        "levelTask": "1",
        ///        "IdNguoiTaoViec": 0,
        ///        "IdNguoiGanViec": 0,
        ///        "Status" : 1
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] ProjectTask item)
        {
            var r = _context.ProjectTasks.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
            r.CompanyId = CompanyId;
            r.IdSprint = item.IdSprint;
            r.CodeCV = item.CodeCV;
            r.IdDuAn = item.IdDuAn;
            r.NameCV = item.NameCV;
            r.TypeCV = item.TypeCV;
            r.LevelTask = item.LevelTask;
            r.TimeTask = item.TimeTask;
            r.Overview = item.Overview;
            r.ContentTask = item.ContentTask;
            r.PStatus = item.PStatus;
            r.IdNguoiGanViec = item.IdNguoiGanViec;
            r.IdNguoiTaoViec = item.IdNguoiTaoViec;
            r.PStatus = item.PStatus;
            _context.ProjectTasks.Update(r);
            await _context.SaveChangesAsync();
            return Ok();
        }
         /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/DmCongViec/Changestatus
        ///     {
        ///        "Id": 1,
        ///        "companyId": 1,
        ///        "idDuAn":1,
        ///        "codeCV":"string",
        ///        "nameCV": "string",
        ///        "typeCV": "string",
        ///        "Overview": "string",
        ///        "contentTask": "string",
        ///        "timeTask": "1",
        ///        "levelTask": "string",
        ///        "IdNguoiTaoViec": 0,
        ///        "IdNguoiGanViec": 0,
        ///        "Status" : 0
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ChangeStatus([FromBody] ProjectTask item)
        {
            var r = _context.ProjectTasks.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
            r.CompanyId = CompanyId;
            r.CodeCV = item.CodeCV;
            r.IdDuAn = item.IdDuAn;
            r.NameCV = item.NameCV;
            r.TypeCV = item.TypeCV;
            r.LevelTask = item.LevelTask;
            r.TimeTask = item.TimeTask;
            r.Overview = item.Overview;
            r.ContentTask = item.ContentTask;
            r.IdNguoiGanViec = item.IdNguoiGanViec;
            r.IdNguoiTaoViec = item.IdNguoiTaoViec;
            r.PStatus = 0;
            _context.ProjectTasks.Update(r);
            await _context.SaveChangesAsync();
            return Ok();
        }
        /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/DmCongViec/Changestatus1
        ///     {
        ///        "Id": 1,
        ///        "companyId": 1,
        ///        "idDuAn":1,
        ///        "codeCV":"string",
        ///        "nameCV": "string",
        ///        "typeCV": "string",
        ///        "Overview": "string",
        ///        "contentTask": "string",
        ///        "timeTask": "string",
        ///        "levelTask": "1",
        ///        "IdNguoiTaoViec": 0,
        ///        "IdNguoiGanViec": 0,
        ///        "Status" : 1
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ChangeStatusOne([FromBody] ProjectTask item)
        {
            var r = _context.ProjectTasks.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
            r.CompanyId = CompanyId;
            r.CodeCV = item.CodeCV;
            r.IdDuAn = item.IdDuAn;
            r.NameCV = item.NameCV;
            r.TypeCV = item.TypeCV;
            r.LevelTask = item.LevelTask;
            r.TimeTask = item.TimeTask;
            r.Overview = item.Overview;
            r.ContentTask = item.ContentTask;
            r.IdNguoiGanViec = item.IdNguoiGanViec;
            r.IdNguoiTaoViec = item.IdNguoiTaoViec;
            r.PStatus = 1;
            _context.ProjectTasks.Update(r);
            await _context.SaveChangesAsync();
            return Ok();
        }
         /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/DmCongViec/Changestatus2
        ///     {
        ///        "Id": 1,
        ///        "companyId": 1,
        ///        "idDuAn":1,
        ///        "codeCV":"string",
        ///        "nameCV": "string",
        ///        "typeCV": "string",
        ///        "Overview": "string",
        ///        "contentTask": "string",
        ///        "timeTask": "string",
        ///        "levelTask": "1",
        ///        "IdNguoiTaoViec": 0,
        ///        "IdNguoiGanViec": 0,
        ///        "Status" : 2
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ChangeStatusTwo([FromBody] ProjectTask item)
        {
            var r = _context.ProjectTasks.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
            r.CompanyId = CompanyId;
            r.CodeCV = item.CodeCV;
            r.IdDuAn = item.IdDuAn;
            r.NameCV = item.NameCV;
            r.TypeCV = item.TypeCV;
            r.LevelTask = item.LevelTask;
            r.TimeTask = item.TimeTask;
            r.Overview = item.Overview;
            r.ContentTask = item.ContentTask;
            r.IdNguoiGanViec = item.IdNguoiGanViec;
            r.IdNguoiTaoViec = item.IdNguoiTaoViec;
            r.PStatus = 2;
            _context.ProjectTasks.Update(r);
            await _context.SaveChangesAsync();
            return Ok();
        }
         /// <summary>
        /// Update an item
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /api/DmCongViec/Changestatus3
        ///     {
        ///        "Id": 1,
        ///        "companyId": 1,
        ///        "idDuAn":1,
        ///        "codeCV":"string",
        ///        "nameCV": "string",
        ///        "typeCV": "string",
        ///        "Overview": "string",
        ///        "contentTask": "string",
        ///        "timeTask": "string",
        ///        "levelTask": "1",
        ///        "IdNguoiTaoViec": 0,
        ///        "IdNguoiGanViec": 0,
        ///        "Status" : 3
        ///     }
        /// </remarks>
        /// <param name="item">item</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ChangeStatusThree([FromBody] ProjectTask item)
        {
            var r = _context.ProjectTasks.FirstOrDefault(t => t.Id == item.Id);
            if (r == null)
            {
                return NotFound();
            }
            r.CompanyId = CompanyId;
            r.CodeCV = item.CodeCV;
            r.IdDuAn = item.IdDuAn;
            r.NameCV = item.NameCV;
            r.TypeCV = item.TypeCV;
            r.LevelTask = item.LevelTask;
            r.TimeTask = item.TimeTask;
            r.Overview = item.Overview;
            r.ContentTask = item.ContentTask;
            r.IdNguoiGanViec = item.IdNguoiGanViec;
            r.IdNguoiTaoViec = item.IdNguoiTaoViec;
            r.PStatus = 3;
            _context.ProjectTasks.Update(r);
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
            var todo = _context.ProjectTasks.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.ProjectTasks.Remove(todo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}