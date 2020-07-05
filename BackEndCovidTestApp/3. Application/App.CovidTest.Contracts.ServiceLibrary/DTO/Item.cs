using System;

namespace App.CovidTest.Contracts.ServiceLibrary.DTO
{
    public class Item
    {
        public int Id { get; set; }
        public string Desc { get; set; }
        public bool Value { get; set; }
        public DateTime Created { get; set; }
    }
}