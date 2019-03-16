using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace PKO.Models
{
    public class ICD
    {
        public int Id { get; set; }

        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }
        [ForeignKey("ICD")]
        public int? ParentId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Code { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        public bool? isLock { get; set; }
        public ICollection<ICD> ICDs { get; set; }
    }
}
