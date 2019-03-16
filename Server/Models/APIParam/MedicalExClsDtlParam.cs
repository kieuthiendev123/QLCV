using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class MedicalExClsDtlParam
    {
        [Required(ErrorMessage = "MISSING_CLS")]
        public long ClsID { get; set; }

        [Required(ErrorMessage = "MISSING_QUANTITY")]
        public int Quantity { get; set; }

        [Required(ErrorMessage = "MISSING_PRICE")]
        public decimal Price { get; set; }

        public List<int> ClsIndex { get; set; }

    }
}