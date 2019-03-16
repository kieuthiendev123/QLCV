using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class PerDetailGroup
    {
        public long? Id { get; set; }

        [Required(ErrorMessage = "MISSING_CompanyId")]
        [ForeignKey("Company")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "MISSING_PermissionDetailId")]
        [ForeignKey("PermissionDetail")]
        public long PermissionDetailId {get;set;}
        
        [Required(ErrorMessage = "MISSING_PermissionGroupId")]
        [ForeignKey("PermissionGroup")]
        public long PermissionGroupId {get;set;}
    }

}
