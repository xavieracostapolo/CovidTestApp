using System.Collections.Generic;
using App.CovidTest.Contracts.ServiceLibrary.Contracts;
using App.CovidTest.Library.Repository;
using Entity = App.CovidTest.Library.Entities;
using Dto = App.CovidTest.Contracts.ServiceLibrary.DTO;
using AutoMapper;
using System.Threading.Tasks;

namespace App.CovidTest.Impl.ServiceLibrary.Implementation
{
    public class ItemApplicationService : IItemApplicationService
    {
        private readonly IRepository<Entity.Item> _repository;
        private readonly IMapper _mapper;

        public ItemApplicationService(
            IRepository<Entity.Item> repository,
            IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task Add(Dto.Item item)
        {
            await _repository.Add(_mapper.Map<Entity.Item>(item));
            var i = await _repository.SaveChanges();
            var j = i;
        }

        public async Task<Dto.Item> Get(int id)
        {
            return _mapper.Map<Dto.Item>(await _repository.Get(id));
        }

        public async Task<IEnumerable<Dto.Item>> GetAll()
        {
            return _mapper.Map<IEnumerable<Dto.Item>>(await _repository.GetAll());
        }
    }
}