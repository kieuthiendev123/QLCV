using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class ICDParam
    {
        public int Id { get; set; }
        public int? ParentId { get; set; }
        [Required(ErrorMessage = "MISSING_CODE")]
        public string Code { get; set; }

        [Required(ErrorMessage = "MISSING_NAME")]
        public string Name { get; set; }    
    }
}