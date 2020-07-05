using Microsoft.EntityFrameworkCore;
using App.CovidTest.Library.Entities;

namespace App.CovidTest.Infraestructure.Data.Contexts
{
    public class CovidTestDbContext : DbContext
    {
        public CovidTestDbContext(DbContextOptions<CovidTestDbContext> options) 
        : base(options)
        {    
        }

        public DbSet<Item> Items { get; set; }
    }
}