using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PKO.Models
{
    public class CommonFunction
    {
        public static decimal ConvertStringToHour(string a)
        {
            var week = new decimal();
            var day = new decimal();
            var hour = new decimal();
            var total = new decimal();
            // truyền vào 1 chuỗi 
            // chuyển chuỗi thành mảng
            var lstIds = a.Split(" ");
            // khai báo 1 mảng ids có độ dài bằng lstIds.Length
            decimal[] ids = new decimal[lstIds.Length];
            for (var i = 0; i <= lstIds.Length - 1; i++)
            {
                ids[i] = decimal.Parse(lstIds[i]);
                if (ids[i].Equals('w'))
                {
                    week = ids[i] * 40;
                }
                else if (ids[i].Equals('d'))
                {
                    day = ids[i] * 8;
                }
                else if (ids[i].Equals('h'))
                {
                    hour = ids[i];
                }
            }
            total = week + day + hour;
            return total;
        }

        public static string ConvertHourToString(decimal a)
        {
            var hour = "";
            var day = "";
            var week = "";
            var total = "";
            // Lay lam tron xuong vd: a = 58 => Math.Floor 58/40 = 1->
            week = Math.Floor(a / 40).ToString();
            if ((decimal.Parse(week) * 40) != a)
            {
                var extend_week = a - (decimal.Parse(week) * 40); // Extend lay so du = 18
                day = Math.Floor(extend_week / 8).ToString(); // Lay lam tron xuong ngay / 8 ra 2 du 2

                if (((decimal.Parse(week) * 40) + (decimal.Parse(day) * 8)) != a)
                {
                    var extend_day = a - (decimal.Parse(week) * 40) - (decimal.Parse(day) * 8); // Lay so gio du 2
                    hour = extend_day.ToString();
                }
            }

            // Kiem tra xem co Week hay khong
            if (decimal.Parse(week) > 0)
            {
                total = total + week + "w ";
            }

            // Kiem tra xem co Day hay khong
            if (decimal.Parse(day) > 0)
            {
                total = total + day + "d ";
            }

            // Kiem tra xem co Hour hay khong
            if (decimal.Parse(hour) > 0)
            {
                total = total + hour + "h ";
            }
            // total = 1w 2d 2h
            return total;
        }
    }
}
