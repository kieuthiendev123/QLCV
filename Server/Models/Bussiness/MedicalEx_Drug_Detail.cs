using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class MedicalEx_Drug_Detail : BaseModel
    {
        public long Id { get; set; }

        [Required]
        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }

        [Required]
        [ForeignKey("MedicalEx_Drug")]
        public long MedicalExDrugId { get; set; }

        [Required]
        [ForeignKey("Drug")]
        public long DrugId { get; set; }

        public decimal Quantity { get; set; }

        public decimal Price { get; set; }

        public string Note { get; set; }

        [Required]
        public decimal Unit { get; set; }

        [Required]
        public decimal Format { get; set; }

        [Required]
        public decimal LieuLuong { get; set; }

        [Required]
        public decimal TanSuat { get; set; }

        [Required]
        public decimal Days { get; set; }
    }
}
