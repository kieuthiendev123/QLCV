using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using PKO.Data;
using Swashbuckle.AspNetCore.Swagger;
using PKO.Options;
using PKO.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using PKO.Services;
using Microsoft.Extensions.PlatformAbstractions;
using PKO.Extensions;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Cors;

namespace PKO
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }

        public Startup(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            Configuration = configuration;
            HostingEnvironment = hostingEnvironment;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<JWTSettings>(Configuration.GetSection("JWTSettings"));

            services.AddDbContext<MainDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<User, IdentityRole>(opts =>
            {
                opts.Password.RequiredUniqueChars = 0;
                opts.Password.RequireNonAlphanumeric = false;
            })
              .AddEntityFrameworkStores<MainDbContext>()
              .AddDefaultTokenProviders();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
              .AddCookie(cfg => cfg.SlidingExpiration = true)
              .AddJwtBearer(jwtBearerOptions =>
              {
                  jwtBearerOptions.RequireHttpsMetadata = false;
                  jwtBearerOptions.SaveToken = true;

                  jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters()
                  {
                      ValidateActor = true,
                      ValidateAudience = true,
                      ValidateLifetime = true,
                      ValidateIssuerSigningKey = true,
                      ValidIssuer = Configuration["JWTSettings:Issuer"],
                      ValidAudience = Configuration["JWTSettings:Audience"],
                      IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWTSettings:SecretKey"]))
                  };
              });

            // Add framework services.
            services.AddSingleton<SubdomainRoute>();
            services.AddMvc();
            services.AddNodeServices();

            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();

            // Register the Swagger generator, defining one or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Title = "API Documents",
                    Description = "API Documents",
                    Version = "v1",
                    TermsOfService = "None",
                    Contact = new Contact { Name = "Thiện Kiều Đình", Email = "kieuthien.dev123@gmail.com", Url = "https://www.facebook.com/kieuthiendev123" },
                    License = new License { Name = "Use under LICX", Url = "https://example.com/license" }
                });
                c.AddSecurityDefinition("Bearer", new ApiKeyScheme() { In = "header", Description = "Please insert JWT with Bearer into field", Name = "Authorization", Type = "apiKey" });

                // Set the comments path for the Swagger JSON and UI.
                var basePath = PlatformServices.Default.Application.ApplicationBasePath;
                var xmlPath = Path.Combine(basePath, "pko.xml");
                c.IncludeXmlComments(xmlPath);
            });

            services.AddTransient<IDbInitializer, DbInitializer>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, SubdomainRoute areaRouter)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseStaticFiles();

            app.UseAuthentication();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    HotModuleReplacementEndpoint = "/dist/__webpack_hmr"
                });
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.RoutePrefix = "api-doc";
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                });

                // Enable middleware to serve swagger-ui (HTML, JS, CSS etc.), specifying the Swagger JSON endpoint.

                app.MapWhen(x => !x.Request.Path.Value.StartsWith("/swagger", StringComparison.OrdinalIgnoreCase), builder =>
                {
                    builder.UseMvc(routes =>
                    {
                        routes.DefaultHandler = areaRouter;
                        routes.MapSpaFallbackRoute(name: "spa-fallback", defaults: new { controller = "Home", action = "Index" });
                    });
                });
            }
            else
            {
                app.UseMvc(routes =>
                {
                    routes.MapRoute(name: "default", template: "{controller=Home}/{action=Index}/{id?}");
                    routes.MapRoute("Sitemap", "sitemap.xml", new { controller = "Home", action = "SitemapXml" });
                    routes.MapSpaFallbackRoute(name: "spa-fallback", defaults: new { controller = "Home", action = "Index" });
                });
                app.UseExceptionHandler("/Home/Error");
            }
        }
    }
}
