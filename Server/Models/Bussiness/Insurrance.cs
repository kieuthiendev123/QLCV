using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class Insurrance : BaseModel
    {
        public int Id { get; set; }
        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }
        [Required]
        [MaxLength(20)]
        public string Code { get; set; }

        [ForeignKey("Patient")]
        public long PatientId { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }
        public int HospitalRegis { get; set; }
        public DateTime? InputCard { get; set; }
    }
}
