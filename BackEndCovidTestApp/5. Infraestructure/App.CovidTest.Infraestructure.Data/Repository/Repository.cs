using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using App.CovidTest.Infraestructure.Data.Contexts;
using App.CovidTest.Library.Repository;
using Microsoft.EntityFrameworkCore;

namespace App.CovidTest.Infraestructure.Data.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly CovidTestDbContext _context;

        protected DbSet<T> DbSet { get; }

        public Repository(CovidTestDbContext context)
        {
            this._context = context;
            DbSet = this._context.Set<T>();
        }

        public async Task Add(T entity)
        {
            await DbSet.AddAsync(entity);
        }

        public IQueryable<T> Find()
        {
            return DbSet.AsQueryable();
        }

        public async Task<T> Get(int id)
        {
            return await DbSet.FindAsync(id);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await DbSet.ToListAsync();
        }

        public async Task<int> SaveChanges()
        {
            return await this._context.SaveChangesAsync();
        }
    }
}