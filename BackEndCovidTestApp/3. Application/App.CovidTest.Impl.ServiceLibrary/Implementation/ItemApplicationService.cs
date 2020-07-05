using System.Collections.Generic;
using App.CovidTest.Contracts.ServiceLibrary.Contracts;
using Entity = App.CovidTest.Library.Entities;
using Dto = App.CovidTest.Contracts.ServiceLibrary.DTO;
using AutoMapper;
using System.Threading.Tasks;
using App.CovidTest.Library.DomainContracts;

namespace App.CovidTest.Impl.ServiceLibrary.Implementation
{
    public class ItemApplicationService : IItemApplicationService
    {
        private readonly IItemDomainService _itemDomainService;
        private readonly IMapper _mapper;

        public ItemApplicationService(
            IItemDomainService itemDomainService,
            IMapper mapper)
        {
            _itemDomainService = itemDomainService;
            _mapper = mapper;
        }
        public async Task Add(Dto.Item item)
        {
            await _itemDomainService.Add(_mapper.Map<Entity.Item>(item));
        }

        public async Task<Dto.Item> Get(int id)
        {
            return _mapper.Map<Dto.Item>(await _itemDomainService.Get(id));
        }

        public async Task<IEnumerable<Dto.Item>> GetAll()
        {
            return _mapper.Map<IEnumerable<Dto.Item>>(await _itemDomainService.GetAll());
        }
    }
}