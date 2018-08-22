using Edu.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Edu.Models.Filters.Implementations
{
    public class HumanFilter
    {
        public int? ID { get; set; }
        public string Name { get; set; }
        public DateTime? DateOfBirth { get; set; }

        public HumanFilter(int? id, string name, DateTime? dateOfBirth)
        {
            this.ID = id;
            this.Name = name;
            this.DateOfBirth = dateOfBirth;
        }

        public Predicate<Human> GeneratePredicate()
        {
            return (human) =>
            {
                bool matches = true;
                bool allNull = true;
                if (this.ID.HasValue)
                {
                    matches = matches && this.ID == human.ID;
                    allNull = false;
                }
                if (Name != null)
                {
                    matches = matches && this.Name == human.Name;
                    allNull = false;
                }
                if (DateOfBirth.HasValue)
                {
                    matches = matches && this.DateOfBirth == human.DateOfBirth;
                    allNull = false;
                }
                return matches && !allNull;
            };
        }
    }
}
