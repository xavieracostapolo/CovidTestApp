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

# Agregar proyectos a la solucion
* dotnet sln BackEndCovidTestApp.sln add 2.\ Distribution/App.CovidTest.WebAPI
* dotnet sln BackEndCovidTestApp.sln add 3.\ Application/App.CovidTest.Contracts.ServiceLibrary/
* dotnet sln BackEndCovidTestApp.sln add 3.\ Application/App.CovidTest.Impl.ServiceLibrary/
* dotnet sln BackEndCovidTestApp.sln add 4.\ Domain/App.CovidTest.Library/
* dotnet sln BackEndCovidTestApp.sln add 5.\ Infraestructure/App.CovidTest.Infraestructure.Data/
* dotnet sln BackEndCovidTestApp.sln add 5.\ Infraestructure/App.CovidTest.Infraestructure.ExternalService/

# Agregar referencia de A to B
* dotnet add 5.\ Infraestructure/App.CovidTest.Infraestructure.Data/ reference 4.\ Domain/App.CovidTest.Library/

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

# Ciclo de vida IoC
* Transient: Se crean cada vez que se solicitan desde el contenedor de servicios. Esta vida útil funciona mejor para servicios ligeros y sin estado.

* Scoped: Se crean una vez por solicitud del cliente(conexión). Se utiliza cuando queremos servir la misma instancia dentro del mismo contexto de una petición HTTP, pero diferente entre distintos contextos HTTP.

* Singleton: Se crean la primera vez que se solicitan o cuando Startup.ConfigureServices se ejecuta y se especifica una instancia con el registro del servicio. Cada solicitud posterior utiliza la misma instancia.

# Docker
* docker push sitivo5/app.covidtest.webapi
* docker tag 23b09e91bee4 sitivo5/app.covidtest.webapi:1.0
* docker images
* docker run -d -p 1338:80 app.covidtest.webapi
* docker ps -a
* docker run -d -p 1338:80 --name app.covidtest.webapi.image app.covidtest.webapi 
* docker stop docker-tutorial
* docker start docker-tutorial
* docker create -p 1338:80 --name app.covidtest.webapi.container app.covidtest.webapi
* docker login
* docker build -t app.covidtest.webapi -f Dockerfile .
* dotnet publish -c Release
* dotnet build
* dotnet restore : 
