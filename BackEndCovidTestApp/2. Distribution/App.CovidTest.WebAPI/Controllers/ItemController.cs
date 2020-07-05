using App.CovidTest.WebAPI.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace App.CovidTest.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]/v1")]
    public class ItemController : ControllerBase
    {
        private readonly IItemService _itemService;
        public ItemController(IItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpGet]
        public string Get()
        {
            return _itemService.Test();
        }
    }
}