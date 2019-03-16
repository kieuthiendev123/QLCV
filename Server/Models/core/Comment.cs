using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class Comment
    {
        public long Id { get; set; }
        [Required]
        public long CompanyId { get; set; }
        [Required]
        public string CodeComment { get; set; }
        [Required]
        public DateTime TimeComment { get; set; }
        public long IdPersonComment { get; set; }
        public string Content { get; set; }
    }
}
