using App.CovidTest.Contracts.ServiceLibrary.Contracts;
using App.CovidTest.Impl.ServiceLibrary.Implementation;
using App.CovidTest.Infraestructure.Data.Repository;
using App.CovidTest.Library.Repository;
using App.CovidTest.WebAPI.Services.Contracts;
using App.CovidTest.WebAPI.Services.Implementations;
using Microsoft.Extensions.DependencyInjection;

namespace App.CovidTest.WebAPI.Helpers
{
    public static class IoC
    {
        public static IServiceCollection AddDependency(this IServiceCollection services)
        {
            services.AddTransient<IItemService, ItemService>();
            services.AddTransient<IItemApplicationService, ItemApplicationService>();
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

            return services;
        }
    }
}