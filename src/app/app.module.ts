import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { ReporteComponent } from './reporte/reporte.component';
import { PrediccionComponent } from './prediccion/prediccion.component';
import { RedneuronalComponent } from './redneuronal/redneuronal.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    PrincipalComponent,
    ContactoComponent,
    LoginComponent,
    AdminComponent,
    NotificacionComponent,
    ReporteComponent,
    PrediccionComponent,
    RedneuronalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
