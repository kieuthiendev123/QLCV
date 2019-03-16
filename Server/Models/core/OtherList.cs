using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class OtherList
    {
        public long Id { get; set; }
        [Required]

        [ForeignKey("Company")]
        public int CompanyId { get; set; }
        [Required]
        [ForeignKey("OtherListType")]
        public long TypeId { get; set; }
        [Required]
        public string Name { get; set; }
         [Required]
        public string MaDM { get;set; }

        [Required]
        public int Status { get;set; }

        public string Comment { get;set; }
    }
}
