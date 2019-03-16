using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace PKO.Models
{
    public enum UserLevel
    {
        OWNER, EMPLOYEE, SYSTEM_ADMIN, SYSTEM_USER
    }

    public class User : IdentityUser
    {
        public int? CompanyId { get; set; }
        public long? RoomId { get; set; }

        [Required]
        public UserLevel Level { get; set; }
        [MaxLength(100)]

        public string FullName { get; set; }

        public string RefCode { get; set; }

         [Required(ErrorMessage = "MISSING_STATUS")]
        public int Status { get; set; }

        [Required(ErrorMessage = "MISSING_PermissionId")]
        public long PermissionId { get; set; }

        public string Comment { get; set; }

        [Required(ErrorMessage = "MISSING_Address")]
        public string Address { get; set; }

         [Required(ErrorMessage = "MISSING_OtherListId")]
         [ForeignKey("OtherList")]
         public long OtherListId { get; set; }
         public string OtherListName { get; set; }
         public string PhoneNumber { get; set;}

         public string MaNV {get;set;}
    }
}
