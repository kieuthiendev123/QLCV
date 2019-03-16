using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class Patient : BaseModel
    {
        public long Id { get; set; }
        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }
        [Required]
        [MaxLength(10)]
        public string Code { get; set; }

        [Required]
        [MaxLength(100)]
        public string FullName { get; set; }
        public long Gender { get; set; }
        public int BirthYear { get; set; }
        public long? Job { get; set; }
        public long? Nationality { get; set; }
        public long? Nation { get; set; }
        public long? City { get; set; }
        public long? District { get; set; }
        public long? Ward { get; set; }

        [MaxLength(250)]
        public string Address { get; set; }

        [MaxLength(50)]
        public string Phone { get; set; }
        public int? Status { get; set; }
    }
}
