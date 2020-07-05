using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace App.CovidTest.Library.Repository
{
    public interface IRepository<T> where T : class
    {
        void Add(T entity);
        T Get(int id);
        IEnumerable<T> GetAll();
        IEnumerable<T> Find(Expression<Func<T, bool>> predicate);
        int SaveChanges();
    }
}