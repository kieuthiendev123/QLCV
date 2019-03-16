using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace PKO.Models
{
    public enum PatientType
    {
        CHO_KHAM = 0,
        DANG_KHAM = 1
    }
    public enum MedicalExStatus
    {
        CHO_THANH_TOAN = 0,
        CHO_KHAM = 1,
        DANG_KHAM = 2,
        DA_KHAM = 3
    }
    public enum MedicalType
    {
        PHI_KHAM = 0,
        PHI_CLS = 1,
        PHI_THUOC = 2,
        DA_THANH_TOAN = 3
    }
    public enum ReceiptsType
    {
        PHIEU_THU = 0,
        PHIEU_CHI = 1
    }
}
