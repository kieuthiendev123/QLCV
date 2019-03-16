using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class Accountant : BaseModel
    {
        public long Id { get; set; }
        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }
        [Required]
        [MaxLength(20)]
        public string Code { get; set; } // Số phiếu

        [ForeignKey("Patient")]
        public long PatientId { get; set; }
        public int Group { get; set; } // Loại phí
        public int Type { get; set; } // Loại thu chi
        public decimal Money { get; set; }
        public long? PhieuCDId { get; set; }
        public long? DonThuocId { get; set; }
        public long? FeeId { get; set; } // phi khám
    }
}
