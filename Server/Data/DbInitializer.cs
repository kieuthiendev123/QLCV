using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PKO.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace PKO.Data
{
    public interface IDbInitializer
    {
        Task SeedAsync();
    }

    public class DbInitializer : IDbInitializer
    {
        private readonly MainDbContext _ctx;
        private readonly UserManager<User> _userManager;

        public DbInitializer(MainDbContext ctx, UserManager<User> userManager)
        {
            _ctx = ctx;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            await _ctx.Database.MigrateAsync().ConfigureAwait(false);

            if (!await _ctx.Users.AnyAsync())
            {

                var user = new User()
                {
                    Email = "admin@admin.com",
                    UserName = "admin",
                    Level = UserLevel.SYSTEM_ADMIN
                };

                var result = await _userManager.CreateAsync(user, "Admin123$%^");
                if (result.Succeeded)
                {
                    user.EmailConfirmed = true;
                    await _userManager.UpdateAsync(user);
                }
            }
        }
    }
}
