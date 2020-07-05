using System.Collections.Generic;
using System.Linq;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace App.CovidTest.Library.Repository
{
    public interface IRepository<T> where T : class
    {
        Task Add(T entity);
        Task<T> Get(int id);
        Task<IEnumerable<T>> GetAll();
        IQueryable<T> Find();
        Task<int> SaveChanges();
    }
}