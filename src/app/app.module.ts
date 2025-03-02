import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/components/navbar/navbar.component';
import { FooterComponent } from './dashboard/components/footer/footer.component';
import { CervezasComponent } from './dashboard/pages/cervezas/cervezas.component';
import { ContactoComponent } from './dashboard/pages/contacto/contacto.component';
import { NosotrosComponent } from './dashboard/pages/nosotros/nosotros.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './dashboard/pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    CervezasComponent,
    ContactoComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
