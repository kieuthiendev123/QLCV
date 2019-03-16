using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class Project
    {
        public long Id { get; set; }
        [Required]
        public long CompanyId { get; set; }
        public string codeProject { get; set; }
        public string nameProject { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public string note { get; set; }
    }
}
