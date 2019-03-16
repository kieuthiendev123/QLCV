using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class MedicalEx_Drug : BaseModel
    {
        public long Id { get; set; }
        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }
        [ForeignKey("MedicalExamination")]
        public long MedicalExaminationId { get; set; }
        public DateTime DayKeDon { get; set; }
        [Required]
        [MaxLength(10)]
        public string Code { get; set; }
        public int Status { get; set; }
    }
}
