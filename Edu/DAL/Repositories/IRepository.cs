using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Edu.DAL.Repositories
{
    public interface IRepository<TEntity> : IDisposable
    {
        IEnumerable<TEntity> List(Predicate<TEntity> filter);

        TEntity GetById(int id);

        TEntity Create(TEntity entity);

        TEntity Update(TEntity entity);

        bool Delete(int id);

        void Save();
    }
}
