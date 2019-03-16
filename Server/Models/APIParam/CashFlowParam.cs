using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class CashFlowParam : Paging
    {
        [Required(ErrorMessage = "MISSING_TYPE")]
        public int type { get; set; }
    }
}