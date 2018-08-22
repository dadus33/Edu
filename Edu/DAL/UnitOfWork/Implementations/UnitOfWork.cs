using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Edu.DAL.Context;
using Edu.DAL.Repositories;
using Edu.DAL.Repositories.Implementations;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Edu.DAL.UnitOfWork.Implementations
{
    public class UnitOfWork : IUnitOfWork
    {

        private bool disposed;

        private readonly EduContext _dbContext;

        private IHumanRepository _humanRepository;
        public IHumanRepository HumanRepository
        {
            get
            {
                if(_humanRepository == null)
                {
                    _humanRepository = new HumanRepository(_dbContext, this);
                }
                return _humanRepository;
            }
        }

        public UnitOfWork(DbContext context)
        {
            _dbContext = (EduContext) context;
        }


        public void Save()
        {
            _dbContext.SaveChanges();
        }

        private void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    this.HumanRepository.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
