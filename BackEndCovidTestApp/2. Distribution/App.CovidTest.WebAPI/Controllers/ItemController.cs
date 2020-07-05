using System.Collections.Generic;
using System.Threading.Tasks;
using App.CovidTest.WebAPI.Models;
using App.CovidTest.WebAPI.Services.Contracts;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace App.CovidTest.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/v1")]
    public class ItemController : ControllerBase
    {
        private readonly IItemService _itemService;
        public ItemController(IItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpGet]
        [Route("GetItem")]
        public async Task<ActionResult<Item>> GetItem(int id)
        {
            return await _itemService.GetItem(id);
        }

        [HttpPost]
        [Route("SaveItem")]
        public async Task<ActionResult<Item>> SaveItem(Item item)
        {
            return await _itemService.SaveItems(item);
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult<IEnumerable<Item>>> GetAll()
        {
            var res = await _itemService.GetItems();
            return res.ToList();
        }
    }
}