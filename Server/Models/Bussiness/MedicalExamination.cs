using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class MedicalExamination : BaseModel
    {
        public int Id { get; set; }

        [ForeignKey("Patient")]
        public long PatientId { get; set; }

        [ForeignKey("Insurrance")]
        public long InsurranceId { get; set; }
        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }
        [Required]
        public DateTime DayOfExamination { get; set; }

        [Required]
        [MaxLength(500)]
        public string Reason { get; set; }

        [ForeignKey("Fee")]
        public long FeeId { get; set; }

        [ForeignKey("Room")]
        public long RoomId { get; set; }

        [ForeignKey("ICD")]
        public long? IcdId { get; set; }
        //Trạng thái
        public int Status { get; set; }
        // số thứ tự khám
        public int Number { get; set; }

    }
}
