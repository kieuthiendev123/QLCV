using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace PKO.Models
{
    public class Room
    {
        public long Id { get; set; }

        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Code { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        public bool? isLock { get; set; }
    }
}
