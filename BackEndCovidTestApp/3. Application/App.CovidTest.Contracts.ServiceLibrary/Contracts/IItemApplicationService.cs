using System.Collections.Generic;
using System.Threading.Tasks;
using App.CovidTest.Contracts.ServiceLibrary.DTO;

namespace App.CovidTest.Contracts.ServiceLibrary.Contracts
{
    public interface IItemApplicationService
    {
        Task Add(Item item);
        Task<Item> Get(int id);
        Task<IEnumerable<Item>> GetAll();
    }
}