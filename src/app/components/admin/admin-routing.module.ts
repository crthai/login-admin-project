import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfimComponent } from './pages/confim/confim.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeAddComponent } from './pages/home-add/home-add.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'form', component: FormularioComponent, children: [{
      path: 'confirm', component: ConfimComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
