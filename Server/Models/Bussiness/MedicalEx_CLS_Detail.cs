using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class MedicalEx_CLS_Detail : BaseModel
    {
        public long Id { get; set; }
        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }
        [ForeignKey("MedicalEx_CLS")]
        public long MedicalExClsId { get; set; }
        [ForeignKey("CLS")]
        public long ClsId { get; set; }
        public int Quantity { get; set; }
        public Decimal Price { get; set; }
        public DateTime DayThucHien { get; set; }
        public string Result { get; set; }
        public int Status { get; set; }
    }
}
