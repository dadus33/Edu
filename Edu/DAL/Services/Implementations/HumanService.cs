using Edu.DAL.UnitOfWork;
using Edu.Models.Entities;
using System;
using System.Collections.Generic;

namespace Edu.DAL.Services.Implementations
{
    class HumanService : IHumanService
    {
        private readonly IUnitOfWork unitOfWork;

        public HumanService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public Human Create(Human human)
        {
            //We validate the human first
            //Let's say for instance that we don't add people named Dick
            if (isValidHuman(human))
            {
                return null;
            }
            Human added = unitOfWork.HumanRepository.Create(human);
            unitOfWork.Save();
            return added;
        }

        public bool Delete(Human human)
        {
            //We don't delete people with invalid IDs
            if(!isValidID(human.ID))
            {
                return false;
            }
            bool deleted = unitOfWork.HumanRepository.Delete(human.ID);

            unitOfWork.Save();

            return deleted;
        }

        public Human Get(int id)
        {   
            //Check for invalid ID first
            if (!isValidID(id))
            {
                return null;
            }
            return unitOfWork.HumanRepository.GetById(id);
        }

        public List<Human> List(Predicate<Human> filter)
        {

            return (List<Human>) unitOfWork.HumanRepository.List(filter);
        }

        public bool Update(Human human)
        {
            if (!isValidHuman(human))
            {
                return false;
            }
            bool updated = unitOfWork.HumanRepository.Update(human);

            unitOfWork.Save();

            return updated;
        }

        //Checks if we have a possible valid ID
        private bool isValidID(int id)
        {
            return id > 0;
        }
        
        private bool isValidHuman(Human entity)
        {
            //Let's say we only register people who are born after 1990 and don't have "Dick" in their names
            return (entity.DateOfBirth > DateTime.Parse("1990-01-01")) && (!entity.Name.Contains("Dick")) && (isValidID(entity.ID));
        }
    }
}
