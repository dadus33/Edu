using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Edu.DAL.Context;
using Edu.DAL.UnitOfWork;
using Edu.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Edu.DAL.Repositories.Implementations
{
    class HumanRepository : BaseRepository<Human>, IHumanRepository
    {
        public HumanRepository(EduContext dbContext, IUnitOfWork unitOfWork) : base(dbContext, unitOfWork)
        {
        }

        public override Human Create(Human entity)
        {
            return dbContext.Humans.Add(entity).Entity;
        }

        public override Human GetById(int id)
        {
            return dbContext.Humans.Find(id);
        }

        public override IEnumerable<Human> List(Predicate<Human> filter)
        {
            return dbContext.Humans.Where((human) => filter(human)).ToList();
        }

        public override Human Update(Human entity)
        {
            return dbContext.Humans.Update(entity).Entity;
        }

        public override bool Delete(int id)
        {
            Human toRemove = GetById(id);
            if (toRemove == null)
            {
                return false;
            }
            dbContext.Humans.Remove(toRemove);
            return true;
        }

        public override void Save()
        {
            unitOfWork.Save();
        }

    }
}
