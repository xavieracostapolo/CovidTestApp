import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HistoriaClinicaComponent } from './pages/historia-clinica/historia-clinica.component';
import { RegistrarPacienteComponent } from './pages/registrar-paciente/registrar-paciente.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HistoriaClinicaComponent,
    RegistrarPacienteComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    PacientesRoutingModule
  ],
  exports: [
    DashboardComponent,
    HistoriaClinicaComponent
  ]
})
export class PacientesModule { }
