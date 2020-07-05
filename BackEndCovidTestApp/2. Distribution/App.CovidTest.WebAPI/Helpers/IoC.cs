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

            return services;
        }
    }
}