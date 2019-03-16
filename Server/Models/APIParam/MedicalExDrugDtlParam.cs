using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class MedicalExDrugDtlParam
    {
        [Required(ErrorMessage = "MISSING_DRUG")]
        public long DrugID { get; set; }

        [Required(ErrorMessage = "MISSING_QUANTITY")]
        public int Quantity { get; set; }

        [Required(ErrorMessage = "MISSING_PRICE")]
        public decimal Price { get; set; }

        [Required(ErrorMessage = "MISSING_UNIT")]
        public decimal Unit { get; set; }

        [Required(ErrorMessage = "MISSING_FORMAT")]
        public decimal Format { get; set; }

        [Required(ErrorMessage = "MISSING_LIEU_LUONG")]
        public decimal LieuLuong { get; set; }

        [Required(ErrorMessage = "MISSING_TAN_SUAT")]
        public decimal TanSuat { get; set; }

        [Required(ErrorMessage = "MISSING_DAYS")]
        public decimal Days { get; set; }

        public string Note { get; set; }
    }
}