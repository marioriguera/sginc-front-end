import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { AreaTrabajoComponent } from './componentes/area-trabajo/area-trabajo.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { MisIncidenciasComponent } from './componentes/mis-incidencias/mis-incidencias.component';

import { AppRoutingModule } from './app-routing.module';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { GestionarServiciosComponent } from './componentes/gestionar-servicios/gestionar-servicios.component';
import { GestionarEmpresasComponent } from './componentes/gestionar-empresas/gestionar-empresas.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AreaTrabajoComponent,
    BarraNavegacionComponent,
    MisIncidenciasComponent,
    MenuPrincipalComponent,
    GestionarServiciosComponent,
    GestionarEmpresasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
