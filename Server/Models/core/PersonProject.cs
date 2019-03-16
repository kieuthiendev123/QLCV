using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class PersonProject
    {
        public long? Id { get; set; }
        [Required(ErrorMessage = "MISSING_CompanyId")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "MISSING_UsersId")]
        [ForeignKey("AspNetUsers")]
        public string UsersId { get; set; }
       
       [Required(ErrorMessage = "MISSING_ProjectId")]
       [ForeignKey("Project")]
        public long? ProjectId { get; set; }
        
    }
}
