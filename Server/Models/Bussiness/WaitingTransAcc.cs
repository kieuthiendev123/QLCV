using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class WaitingTransAcc : BaseModel
    {
        public int Id { get; set; }
        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }
        [ForeignKey("Patient")]
        public long PatientId { get; set; }
        [MaxLength(50)]
        public string Code { get; set; }
        public int Group { get; set; } // Loại phí
        public int Type { get; set; } // Loại thu chi
        public decimal Money { get; set; }
        public long? PhieuCDId { get; set; }
        public long? DonThuocId { get; set; }
        public long? FeeId { get; set; } // phi khám
        [ForeignKey("MedicalExamination")]
        public long? MedicalExId { get; set; } // đợt khám
    }
}
