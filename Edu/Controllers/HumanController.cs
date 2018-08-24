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
            if (!ModelState.IsValid)
            {
                return null;
            }
            Human created = humanService.Create(human);
            if(created == null)
            {
                return NoContent();
            }
            return created;
        }

        [HttpGet]
        [Route("api/[controller]/[action]")]
        public ActionResult<List<Human>> List([FromQuery]string name, [FromQuery]int? id, [FromQuery]DateTime? dateOfBirth)
        {
            HumanFilter filter = new HumanFilter(id, name, dateOfBirth);
            List<Human> matchedItems = humanService.List(filter.GeneratePredicate());
            return matchedItems;
        }

        [HttpGet]
        [Route("api/[controller]/[action]")]
        public ActionResult<Human> Get([FromQuery]int id)
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
        public ActionResult<Human> Update([FromBody]Human human)
        {
            Human updated;
            if ((updated = humanService.Update(human)) != null)
            {
                return human;
            }
            return BadRequest();
        }

        [HttpDelete]
        [Route("api/[controller]/[action]")]
        public ActionResult Delete(int id)
        {
            if (humanService.Delete(id))
            {
                return NoContent();
            }
            return BadRequest();
        }
        

        
    }
}