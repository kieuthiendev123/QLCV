using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class Company : BaseModel
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Code { get; set; }

        [Required]
        [MaxLength(150)]
        public string Name { get; set; }

        [Required]
        [MaxLength(150)]
        public string OwnerName { get; set; }

        [MaxLength(250)]
        public string Address { get; set; }

        [MaxLength(50)]
        public string Phone { get; set; }

        [MaxLength(150)]
        public string Email { get; set; }

        public int? LocationCity { get; set; }

        public int? LocationLat { get; set; }

        public int? LocationLng { get; set; }

        public int? PackId { get; set; }

        public decimal? Price { get; set; }

        public DateTime? DateBegin { get; set; }

        public DateTime? DateExpire { get; set; }

        public Boolean? isLock { get; set; }

        public User UserRef { get; set; }
    }
}
