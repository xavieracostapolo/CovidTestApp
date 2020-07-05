using System.Collections.Generic;
using System.Threading.Tasks;
using App.CovidTest.Library.DomainContracts;
using App.CovidTest.Library.Entities;
using App.CovidTest.Library.Repository;

namespace App.CovidTest.Library.DomainImplementation
{
    public class ItemDomainService : IItemDomainService
    {
        private readonly IRepository<Item> _repository;
        
        public ItemDomainService(IRepository<Item> repository)
        {
            _repository = repository;
        }

        public async Task Add(Item item)
        {
            await _repository.Add(item);
            await _repository.SaveChanges();
        }

        public async Task<Item> Get(int id)
        {
            return await _repository.Get(id);
        }

        public async Task<IEnumerable<Item>> GetAll()
        {
            return await _repository.GetAll();
        }
    }
}