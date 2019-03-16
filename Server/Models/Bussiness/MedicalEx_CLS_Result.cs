using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class MedicalEx_CLS_Result : BaseModel
    {
        public long Id { get; set; }

        [ForeignKey("Clinic")]
        public int ClinicId { get; set; }

        [ForeignKey("MedicalEx_CLS_Detail")]
        public long MedicalExClsDetailId { get; set; }

        // Nếu ClsIndexId là 0 thì là kết quả ảnh
        [ForeignKey("CLS_index")]
        public long ClsindexId { get; set; }

        public string Result { get; set; }
    }
}
