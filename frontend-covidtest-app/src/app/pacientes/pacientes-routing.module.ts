import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HistoriaClinicaComponent } from './pages/historia-clinica/historia-clinica.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { RegistrarPacienteComponent } from './pages/registrar-paciente/registrar-paciente.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'historia-clinica', component: HistoriaClinicaComponent},
  { path: 'registrar-paciente', component: RegistrarPacienteComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
