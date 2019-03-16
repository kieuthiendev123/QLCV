using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace PKO.Models
{
    public class OtherListType
    {
        public long Id { get; set; }
        [Required]
        [ForeignKey ("Company")]
        public int CompanyId { get; set; }
         public string Name { get; set; }
    }
}
