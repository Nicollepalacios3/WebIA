import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { PrediccionComponent } from './prediccion/prediccion.component';
import { RedneuronalComponent} from './redneuronal/redneuronal.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  {path: 'principal', component:PrincipalComponent}, 
  {path: 'login', component:LoginComponent}, 
  {path: 'notificacion', component: NotificacionComponent}, 
  {path: 'contacto', component:ContactoComponent},
  {path: 'admin', component:AdminComponent},  
  {path: 'prediccion', component: PrediccionComponent}, 
  {path: 'redneuronal', component: RedneuronalComponent}, 
  {path: 'reporte', component:ReporteComponent}, 
  {path:'',redirectTo:'/principal',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
