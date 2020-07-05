using System.Collections.Generic;
using App.CovidTest.WebAPI.Models;
using App.CovidTest.WebAPI.Services.Contracts;

namespace App.CovidTest.WebAPI.Services.Implementations
{
    public class ItemService : IItemService 
    {
        public IEnumerable<Item> GetItem(int id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Item> GetItems()
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Item> SaveItems(Item item)
        {
            throw new System.NotImplementedException();
        }

        public string Test()
        {
            return "Hola Mundo.";
        }

        Item IItemService.GetItem(int id)
        {
            throw new System.NotImplementedException();
        }

        Item IItemService.SaveItems(Item item)
        {
            throw new System.NotImplementedException();
        }
    }
}