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
                if (this.ID.HasValue)
                {
                    matches = matches && (this.ID.HasValue ? (this.ID == human.ID) : true);
                }
                if (Name != null)
                {
                    matches = matches && (this.Name == null ? true : human.Name.Contains(this.Name));
                }
                if (DateOfBirth.HasValue)
                {
                    matches = matches && (this.DateOfBirth.HasValue ? (Math.Abs(this.DateOfBirth.Value.Subtract(human.DateOfBirth).TotalDays) <= 1D) : true);
                }
                return matches;
            };
        }
    }
}
