using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class LoginParam
    {
        [Required(ErrorMessage = "MISSING_CLINIC")]
        public string Company { get; set; }

        [Required(ErrorMessage = "MISSING_USERNAME")]
        public string Username { get; set; }

        [Required(ErrorMessage = "MISSING_PASSWORD")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
