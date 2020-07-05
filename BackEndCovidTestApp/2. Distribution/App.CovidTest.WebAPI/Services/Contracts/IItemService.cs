using System.Collections.Generic;
using System.Threading.Tasks;
using App.CovidTest.WebAPI.Models;

namespace App.CovidTest.WebAPI.Services.Contracts
{
    public interface IItemService
    {
         Task<IEnumerable<Item>> GetItems();
         Task<Item> GetItem(int id);
         Task<Item> SaveItems(Item item);
    }
}