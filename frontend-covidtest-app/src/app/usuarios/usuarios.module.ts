import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import * as fromUsuarioState from './store/usuario.reducer';
import { UsuarioEffects } from './store/usuario.effects';
import { UsuarioService } from './services/usuario.service';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuariosRoutingModule,
    StoreModule.forFeature(
      fromUsuarioState.usuarioStateFeatureKey,
      fromUsuarioState.reducers,
      { metaReducers: fromUsuarioState.metaReducers }
    ),
    EffectsModule.forFeature([UsuarioEffects])
  ],
  providers: [
    UsuarioService
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UsuariosModule { }
