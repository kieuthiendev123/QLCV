using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PKO.Models
{
    public class UserSearchParam : Paging
    {
        public string Username { get; set; }
        public string Fullname { get; set; }
    }
}