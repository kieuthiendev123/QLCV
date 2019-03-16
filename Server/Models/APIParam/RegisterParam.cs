using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace PKO.Models
{
    public class RegisterParam
    {


        [Required(ErrorMessage = "MISSING_USERNAME")]
        public string Username { get; set; }

        [Required(ErrorMessage = "MISSING_FULLNAME")]
        public string Fullname { get; set; }

        [Required(ErrorMessage = "MISSING_COMPANYNAME")]
        public string CompanyName { get; set; }

        [Required(ErrorMessage = "MISSING_EMAIL")]
        public string Email { get; set; }

        public string RefCode { get; set; }

        [Required(ErrorMessage = "MISSING_PASSWORD")]
        [StringLength(100, ErrorMessage = "PASSWORD_AT_LEAST_{2}_CHARACTERS", MinimumLength = 6)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string Comment { get; set; }

        [Required(ErrorMessage = "MISSING_Address")]
        public string Address { get; set; }
        [Required(ErrorMessage = "MISSING_MOBILE")]
        public string PhoneNumber { get; set;}

        public string MaNV { get; set;}
    }
}
