import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { LoggerModule } from 'ngx-logger';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';

import { GlobalErrorHandler } from './core/global-error-handler';

import { LoggingService } from './core/logging.service';
import { LoaderService } from './core/loader.service';
import { ServerErrorInterceptorService } from './core/server-error-interceptor.service';
import { LoaderInterceptorService } from './core/loader-interceptor.service';

import { AppComponent } from './core/app.component';
import { AppRoutingModule } from './core/app-routing.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SharedModule } from './shared/shared.module';
import { PacientesModule } from './pacientes/pacientes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      maxOpened: 10,
      preventDuplicates: true,
      countDuplicates: true,
      progressBar: true,
    }), // ToastrModule added
    LoggerModule.forRoot(environment.logging),
    NgxMaskModule.forRoot(),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    UsuariosModule,
    SharedModule,
    PacientesModule,
  ],
  providers: [
    LoggingService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
