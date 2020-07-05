using System.Collections.Generic;
using App.CovidTest.WebAPI.Models;

namespace App.CovidTest.WebAPI.Services.Contracts
{
    public interface IItemService
    {
         IEnumerable<Item> GetItems();
         Item GetItem(int id);
         Item SaveItems(Item item);
         string Test();
    }
}