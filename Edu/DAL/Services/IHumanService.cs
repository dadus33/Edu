using Edu.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Edu.DAL.Services
{
    public interface IHumanService
    {
        Human Create(Human human);
        Human Get(int id);
        List<Human> List(Predicate<Human> filter);
        bool Update(Human human);
        bool Delete(Human human);
    }
}
