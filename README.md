# CovidTestApp

Comandos básicos para trabajar en .NET CLI

# dotnet restore
Para instalar los paquetes de nuget en el proyecto ejecute

# dotnet build
Para Compilar un proyecto, en la carpeta donde se encuentre el .csproj ejecute

# dotnet run 
Para ejecutar un proyecto, en la carpeta donde se encuentre el .csproj ejecute

# dotnet test
Para ejecutar un proyecto de pruebas unitarias, en la carpeta donde se encuentre el proyecto de pruebas ejecute.

# Crear la estructura del proyecto DDD

* dotnet new sln -n BackEndCovidTestApp -o BackEndCovidTestApp
* dotnet new webapi -o "2. Distribution/App.CovidTest.WebAPI" -n App.CovidTest.WebAPI
* dotnet new classlib -o "3. Application/App.CovidTest.Contracts.ServiceLibrary"  -n App.CovidTest.Contracts.ServiceLibrary
* dotnet new classlib -o "3. Application/App.CovidTest.Impl.ServiceLibrary"  -n App.CovidTest.Impl.ServiceLibrary
* dotnet new classlib -o "4. Domain/App.CovidTest.Library" -n App.CovidTest.Library
* dotnet new classlib -o "5. Infraestructure/App.CovidTest.Infraestructure.Data" -n App.CovidTest.Infraestructure.Data
* dotnet new classlib -o "5. Infraestructure/App.CovidTest.Infraestructure.ExternalService" -n App.CovidTest.Infraestructure.ExternalService

* dotnet sln BackEndCovidTestApp.sln add 2.\ Distribution/App.CovidTest.WebAPI
* dotnet sln BackEndCovidTestApp.sln add 3.\ Application/App.CovidTest.Contracts.ServiceLibrary/
* dotnet sln BackEndCovidTestApp.sln add 3.\ Application/App.CovidTest.Impl.ServiceLibrary/
* dotnet sln BackEndCovidTestApp.sln add 4.\ Domain/App.CovidTest.Library/
* dotnet sln BackEndCovidTestApp.sln add 5.\ Infraestructure/App.CovidTest.Infraestructure.Data/
* dotnet sln BackEndCovidTestApp.sln add 5.\ Infraestructure/App.CovidTest.Infraestructure.ExternalService/

* dotnet run -p 2.\ Distribution/App.CovidTest.WebAPI/


Solucion de problema, si envio archivos antes del gitignore.
* git rm -r --cached .
* git add .
* git commit -m "Removing all files in .gitignore"
* git push


# Agregar Swagger al API
* dotnet add 2.\ Distribution/App.CovidTest.WebAPI/  package Swashbuckle.AspNetCore
* https://localhost:5001/swagger/v1/swagger.json
* https://localhost:5001/swagger/index.html