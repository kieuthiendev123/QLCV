// using Microsoft.AspNetCore.Mvc;
// using PKO.Models;
// using PKO.Data;
// using System.Linq;
// using System.Collections.Generic;
// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Authentication.JwtBearer;
// using System.Threading.Tasks;
// using Microsoft.EntityFrameworkCore;
// using PKO.Controllers;
// using Microsoft.Extensions.Logging;

// namespace PKO.Controllers
// {
//     [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
//     [Produces("application/json")]
//     [Route("api/[controller]/[action]")]
//     public class TaskManagerController : BaseController
//     {
//         public TaskManagerController(MainDbContext context, ILogger<TaskManagerController> logger) : base(context, logger)
//         {
//         }

//         /// <summary>
//         /// Get list if item
//         /// </summary>
//         /// <returns></returns>
//         [HttpPost]
//         public async Task<IActionResult> ListTask([FromBody] ReferParam param)
//         {
//             //  var queryable = (from m in _context.ProjectTasks
//             //                  join p in _context.Projects on m.TypeId equals p.Id
//             //                  select new
//             //                  {
//             //                      Id = m.Id,
//             //                      Name = m.Name,
//             //                      MaDanhMuc = m.MaDM,
//             //                      Status = m.Status,
//             //                      Comment = m.Comment,
//             //                      TypeId = m.TypeId,
//             //                      TypeName = p.Name,

//             //                  });
//             // return await PagingList(queryable, param);
//         }
//     }
// }