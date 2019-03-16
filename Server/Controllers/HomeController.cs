using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;
using System;
using PKO.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PKO.Data;

namespace PKO.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController(MainDbContext context, ILogger<HomeController> logger) : base(context, logger)
        {
        }

        [HttpGet]
        public IActionResult Index()
        {
            //var store = await _context.Clinics.FirstOrDefaultAsync(p => p.Code.Equals(ClinicCode));
            //if (store == null)
            //{
            //    return NotFound();
            //}
            //else
            //{
            return View();
            //}
        }

        [HttpGet]
        [Route("sitemap.xml")]
        public IActionResult SitemapXml()
        {
            String xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>";

            xml += "<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">";
            xml += "<sitemap>";
            xml += "<loc>http://localhost:4251/home</loc>";
            xml += "<lastmod>" + DateTime.Now.ToString("yyyy-MM-dd") + "</lastmod>";
            xml += "</sitemap>";
            xml += "<sitemap>";
            xml += "<loc>http://localhost:4251/counter</loc>";
            xml += "<lastmod>" + DateTime.Now.ToString("yyyy-MM-dd") + "</lastmod>";
            xml += "</sitemap>";
            xml += "</sitemapindex>";

            return Content(xml, "text/xml");

        }
    }
}
