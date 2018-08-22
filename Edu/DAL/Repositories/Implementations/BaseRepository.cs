using Edu.DAL.Context;
using Edu.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Edu.DAL.Repositories.Implementations
{
    abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly EduContext dbContext;

        protected readonly IUnitOfWork unitOfWork;

        private bool disposed = false;


        protected BaseRepository(EduContext dbContext, IUnitOfWork unitOfWork)
        {
            this.dbContext = dbContext;
            this.unitOfWork = unitOfWork;
        }

        private void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    dbContext.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public abstract IEnumerable<TEntity> List(Predicate<TEntity> filter);
        public abstract TEntity GetById(int id);
        public abstract TEntity Create(TEntity entity);
        public abstract bool Update(TEntity entity);
        public abstract bool Delete(int id);
        public abstract void Save();
    }
}
