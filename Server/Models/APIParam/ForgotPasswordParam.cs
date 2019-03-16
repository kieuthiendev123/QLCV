using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PKO.Models
{
    public class ForgotPasswordParam
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}