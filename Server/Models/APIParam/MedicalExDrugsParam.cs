using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class MedicalExDrugsParam
    {
        [Required(ErrorMessage = "MISSING_MEDICAL")]
        public long MedicalExaminationId { get; set; }

        [Required(ErrorMessage = "MISSING_PATIENT")]
        public long PatientId { get; set; }

        [Required(ErrorMessage = "MISSING_DRUGS")]
        public List<MedicalExDrugDtlParam> Drugs { get; set; }
    }
}