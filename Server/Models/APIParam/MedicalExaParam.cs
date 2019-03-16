using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class MedicalExaParam 
    {
        public string FullName { get; set; }
        public long Gender { get; set; }
        public int BirthYear { get; set; }
        public string Phone { get; set; }
        public long? City { get; set; }
        public long? District { get; set; }
        public long? Ward { get; set; }
        public string Address { get; set; }
        public DateTime DayOfExamination { get; set; }
        public string Reason { get; set; }
        public long FeeId { get; set; }
        public long RoomId { get; set; }
        // bao hiểm
        public DateTime? InsStartDate { get; set; }
        public DateTime? InsEndDate { get; set; }
        public int? HospitalRegis { get; set; }
        public string InsCode { get; set; }
        public DateTime? InsInputCard { get; set; }
    }
}