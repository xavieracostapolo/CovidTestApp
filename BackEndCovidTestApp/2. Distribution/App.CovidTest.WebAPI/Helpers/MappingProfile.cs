using AutoMapper;
using Dto = App.CovidTest.Contracts.ServiceLibrary.DTO;
using Entity = App.CovidTest.Library.Entities;
using Model = App.CovidTest.WebAPI.Models;

namespace App.CovidTest.WebAPI.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<Model.Item, Dto.Item>();
            CreateMap<Dto.Item, Entity.Item>();
            CreateMap<Entity.Item, Dto.Item>();
            CreateMap<Dto.Item, Model.Item>();
        }
    }
}