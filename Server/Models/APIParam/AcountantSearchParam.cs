using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class AcountantSearchParam : Paging
    {
        public string Code { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
    }
}