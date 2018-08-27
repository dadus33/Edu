using Edu.Models.Entities;
using Edu.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Edu.DAL.Context
{
    public class EduContext : IdentityDbContext<User, Role, int>
    {
        public DbSet<Human> Humans { get; set; }

        public EduContext(DbContextOptions<EduContext> options) : base(options)
        {
        }


        /*
         * For seeding the database
         */
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Human>().HasData(
                    new Human
                    {
                        ID = 1,
                        Name = "Some Dude",
                        DateOfBirth = DateTime.Parse("1999-06-10")
                    },
                    new Human
                    {
                        ID = 2,
                        Name = "Another Dude",
                        DateOfBirth = DateTime.Now
                    }
                );
            base.OnModelCreating(modelBuilder);
        }
    }
}
