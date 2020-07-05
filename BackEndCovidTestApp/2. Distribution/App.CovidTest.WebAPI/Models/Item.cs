using System;
namespace App.CovidTest.WebAPI.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Desc { get; set; }
        public bool Value { get; set; }
        public DateTime Created { get; set; }
    }
}