using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class authgruop
    {
        public long Id { get; set; }
        [Required]
        public long CompanyId { get; set; }
        [Required]
        public string codeAuthgr { get; set; }
        [Required]
        public string nameAuthgr { get; set; }
        public int auth_id { get; set; }
        [Required]
        public string auth_name { get; set; }

        public string note{get;set;}
        public int status{get;set;}


    }

}
