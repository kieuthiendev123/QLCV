using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace PKO.Models
{
    public class auth
    {
       public long Id { get; set; }
       public long CompanyId{get;set;}

        public string codeAuth{get;set;}
        public string nameAuth{get;set;}
        public string description{get;set;}
    }
}
