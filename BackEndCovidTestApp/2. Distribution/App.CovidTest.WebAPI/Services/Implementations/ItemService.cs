using System.Collections.Generic;
using App.CovidTest.Contracts.ServiceLibrary.Contracts;
using Model = App.CovidTest.WebAPI.Models;
using App.CovidTest.WebAPI.Services.Contracts;
using Dto = App.CovidTest.Contracts.ServiceLibrary.DTO;
using AutoMapper;
using System.Threading.Tasks;

namespace App.CovidTest.WebAPI.Services.Implementations
{
    public class ItemService : IItemService 
    {
        private readonly IItemApplicationService _itemApplicationService;
        private readonly IMapper _mapper;

        public ItemService(
            IItemApplicationService itemApplicationService,
            IMapper mapper)
        {
            _itemApplicationService = itemApplicationService;
            _mapper = mapper;
        }
        public async Task<Model.Item> GetItem(int id)
        {
            return _mapper.Map<Model.Item>(await _itemApplicationService.Get(id));
        }

        public async Task<IEnumerable<Model.Item>> GetItems()
        {
            return _mapper.Map<IEnumerable<Model.Item>>(await _itemApplicationService.GetAll());
        }

        public async Task<Model.Item> SaveItems(Model.Item item)
        {
            await _itemApplicationService.Add(_mapper.Map<Dto.Item>(item));
            return new Model.Item();
        }
    }
}