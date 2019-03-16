using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class UserPermission
    {
        public long Id { get; set; }
        [Required(ErrorMessage = "MISSING_CompanyId")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "MISSING_UserId")]
        [ForeignKey("AspNetUsers")]
        public string UserId { get; set; }

        [Required(ErrorMessage = "MISSING_PermissionId")]
        [ForeignKey("Permission")]
        public long PermissionTypeId { get; set; }
    }

}
