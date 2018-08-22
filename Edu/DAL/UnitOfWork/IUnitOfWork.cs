using Edu.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Edu.DAL.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IHumanRepository HumanRepository { get; }

        void Save();
    }
}
