using PKO.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace PKO.Data
{
    public class MainDbContext : IdentityDbContext<User>
    {
        public MainDbContext(DbContextOptions<MainDbContext> options)
            : base(options)
        {
        }

        //List of DB Models - Add your DB models here
        public DbSet<Company> Companys { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<OtherListType> OtherListTypes { get; set; }
        public DbSet<OtherList> OtherLists { get; set; }
        public DbSet<Project> Projects{get;set;}
        
        public DbSet<ProjectTask> ProjectTasks { get; set; }
        public DbSet<Comment> Comments { get; set; }
         public DbSet<Sprint> Sprints { get; set; }

        public DbSet<PersonProject> PersonProjects { get; set; }

        public DbSet<PermissionGroup> PermissionGroups {get; set;}
        public DbSet<Permission> Permissions{get;set;}
        public DbSet<PerDetail> PerDetails{get;set;}
        public DbSet<PermissionDetail> PermissionDetails {get;set;}

        public DbSet<PerDetailGroup> PerDetailGroups {get;set;}

        public DbSet<UserPermission> UserPermissions { get; set;}

        

      

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Company>()
                .ToTable("Company");
            modelBuilder.Entity<Company>()
                .HasIndex(u => u.Code).IsUnique();
            modelBuilder.Entity<Profile>().ToTable("Profile");
            modelBuilder.Entity<OtherList>().ToTable("OtherList");
            modelBuilder.Entity<OtherListType>().ToTable("OtherListType");
            modelBuilder.Entity<Project>().ToTable("Project");
            modelBuilder.Entity<ProjectTask>().ToTable("ProjectTask");
            modelBuilder.Entity<Comment>().ToTable("Comment");
            modelBuilder.Entity<PersonProject>().ToTable("PersonProject");
            modelBuilder.Entity<Sprint>().ToTable("Sprint");

            modelBuilder.Entity<PermissionGroup>().ToTable("PermissionGroup");
            modelBuilder.Entity<Permission>().ToTable("Permission");
            modelBuilder.Entity<PermissionDetail>().ToTable("PermissionDetail");
            modelBuilder.Entity<PerDetailGroup>().ToTable("PerDetailGroup");
            modelBuilder.Entity<UserPermission>().ToTable("UserPermission");

        }
    }
}

