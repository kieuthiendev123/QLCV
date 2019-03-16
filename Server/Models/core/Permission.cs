using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class Permission
    {
        public long? Id { get; set; }

        [Required(ErrorMessage = "MISSING_CompanyId")]
        [ForeignKey("Company")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "MISSING_Code")]
        public string Code { get; set; }
        
        [Required(ErrorMessage = "MISSING_Name")]
        public string Name { get; set; }
    }

}
