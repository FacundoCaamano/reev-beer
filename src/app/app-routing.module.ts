import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './dashboard/pages/inicio/inicio.component';
import { CervezasComponent } from './dashboard/pages/cervezas/cervezas.component';
import { NosotrosComponent } from './dashboard/pages/nosotros/nosotros.component';
import { ContactoComponent } from './dashboard/pages/contacto/contacto.component';

const routes: Routes = [
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'cervezas',
    component:CervezasComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
