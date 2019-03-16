using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class Sprint
    {
        public long Id { get; set; }
        [Required]
        public long CompanyId { get; set; }
        [Required]
        public string codeSprint { get; set; }
        [Required]
        public long idProject { get; set; }
        [Required]
        public DateTime startDate { get; set; }
        [Required]
        public DateTime endDate { get; set; }

        public string nameSprint { get; set; }
        public DateTime timeExtension { get; set; }
        public int? statusSprint { get; set; }
        public string Note { get; set; }
    }
}
