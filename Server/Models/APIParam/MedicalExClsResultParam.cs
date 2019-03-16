using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class MedicalExClsResultParam
    {
        [Required(ErrorMessage = "MISSING_DETAIL_ID")]
        public long MedicalExClsDetailId { get; set; }

        public List<string> Images { get; set; }

        public List<MedicalExClsResultIndexParam> ClsIndexResults { get; set; }

    }

    public class MedicalExClsResultIndexParam
    {
        [Required(ErrorMessage = "MISSING_CLS_INDEX")]
        public long ClsIndex { get; set; }

        [Required(ErrorMessage = "MISSING_RESULT")]
        public string Result { get; set; }
    }
}