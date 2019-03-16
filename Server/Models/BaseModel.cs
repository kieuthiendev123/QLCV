using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class BaseModel
    {
        [MaxLength(450)]
        public string UserCreate { get; set; }

        public DateTime DateCreated { get; set; }
        [MaxLength(450)]
        public string UserUpdate { get; set; }
        
        public DateTime? DateUpdate { get; set; }
    }
}
