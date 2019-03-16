using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace PKO.Models
{
    public class UserParam
    {

        public string Id { get; set; }
        public int Company { get; set; }

        [Required(ErrorMessage = "MISSING_COMPANY")]
        public string Username { get; set; }

        [Required(ErrorMessage = "MISSING_FULLNAME")]
        public string Fullname { get; set; }

        [Required(ErrorMessage = "MISSING_PASSWORD")]
        public string Password { get; set; }

        // [Required(ErrorMessage = "MISSING_ROOM")]
        // public long RoomId { get; set; }
        [Required(ErrorMessage = "MISSING_EMAIL")]
        public string Email { get; set; }

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

         public string MaNV { get; set;}
    }
}
