using System;

namespace App.CovidTest.Library.Entities
{
    public class Item
    {
        public int Id { get; set; }
        public string Desc { get; set; }
        public bool Value { get; set; }
        public DateTime Created { get; set; }
    }
}