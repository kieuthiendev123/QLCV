using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class ReferParam: Paging
    {   
        public long? Id { get;set;}
        public long? IdP { get;set;}
        public int? Status {get; set;}

        public long? Id_Project {get ; set;}
        public long? Id_Sprint {get ; set;}
        
        [Required(ErrorMessage = "MISSING_CODE")]
        public string Code { get; set; }
        [Required(ErrorMessage = "MISSING_NAME")]
        public string Name { get; set; }
        public int pStatus{get;set;}
    }
}