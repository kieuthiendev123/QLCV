using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class ProjectTask
    {
        public long Id { get; set; }
        [Required]
        public long CompanyId { get; set; }
        [Required]
        public string NameCV { get; set; }
        [Required]
        public string CodeCV { get; set; }
        [Required]
        public long IdDuAn { get; set; }
        [Required]
        public string TypeCV { get; set; }

        public long IdSprint { get; set; }
        
        public string Overview { get; set; }
        public string ContentTask { get; set; }
        public string TimeTask { get; set; }
        public int? LevelTask { get; set; }
        public int? PStatus {get ; set; }
        public long IdNguoiTaoViec { get; set; }
        public long IdNguoiGanViec { get; set; }
    }
}
