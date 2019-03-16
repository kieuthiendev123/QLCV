using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class Profile
    {
        public int Id { get; set; }

        [ForeignKey("OtherList")]
        public long TypeId { get; set; }

        [ForeignKey("Room")]
        public long RoomId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [MaxLength(100)]
        public string Address { get; set; }

        [Required]
        [MaxLength(100)]
        public string Phone { get; set; }

        [Required]
        [MaxLength(100)]
        public string Email { get; set; }
        
        public OtherList OtherList { get; set; }
               
        public Room Room { get; set; }
    }
}
