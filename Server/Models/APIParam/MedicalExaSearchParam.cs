using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class MedicalExaSearchParam : Paging
    {
        public int? Status { get; set; }
        public string Code { get; set; }
    }
}