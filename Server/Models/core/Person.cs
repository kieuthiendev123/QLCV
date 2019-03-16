using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class Person
    {
        public long Id { get; set; }
        [Required]
        public int companyId { get; set; }
       
        public string codeProject { get; set; }
        public string nameProject { get; set; }
        public string memberId { get; set; }
        public string memberName { get; set; }

        public int? status { get;set; }

        public long permissionId { get; set;}
        public string note { get; set; }
         public long idProject {get;set;}
    }
}
