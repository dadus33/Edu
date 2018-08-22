using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Edu.DAL.Repositories;
using Edu.DAL.Services;
using Edu.DAL.UnitOfWork;
using Edu.Models.Entities;
using Edu.Models.Filters.Implementations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Edu.Controllers
{
    public class HumanController : ControllerBase
    {
        private readonly IHumanService humanService;

        public HumanController(IHumanService humanService)
        {
            this.humanService = humanService;
        }

        [HttpPut]
        [Route("api/[controller]/[action]")]
        public ActionResult<Human> Add([FromBody]Human human)
        {
            Human created = humanService.Create(human);
            if(created == null)
            {
                return Accepted("Failed!");
            }
            return created;
        }

        [HttpGet]
        [Route("api/[controller]/[action]")]
        public ActionResult<List<Human>> List([FromQuery]string name, [FromQuery]int? id, [FromQuery]DateTime? birthDate)
        {
            HumanFilter filter = new HumanFilter(id, name, birthDate);
            List<Human> matchedItems = humanService.List(filter.GeneratePredicate());
            if(matchedItems.Count == 0)
            {
                return NotFound();
            }
            return matchedItems;
        }

        [HttpGet]
        [Route("api/human/get/{id:int}")]
        public ActionResult<Human> Get(int id)
        {
            
            Human returnedEntity = humanService.Get(id);
            if (returnedEntity == null)
            {
                return NotFound();
            }
            return new ActionResult<Human>(returnedEntity);
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public ActionResult Update(Human human)
        {
            if (humanService.Update(human))
            {
                return Ok("Updated");
            }
            return NoContent();
        }

        [HttpDelete]
        [Route("api/[controller]/[action]")]
        public ActionResult Delete(int id)
        {
            Human toDelete = humanService.Get(id);
            if(toDelete == null)
            {
                return Accepted((object)"Failed!");
            }
            if (humanService.Delete(toDelete))
            {
                return Ok("Deleted!");
            }
            return Accepted();
        }
        

        
    }
}