using System.Collections.Generic;
using System.Threading.Tasks;
using App.CovidTest.Library.Entities;

namespace App.CovidTest.Library.DomainContracts
{
    public interface IItemDomainService
    {
        Task Add(Item item);
        Task<Item> Get(int id);
        Task<IEnumerable<Item>> GetAll();
    }
}