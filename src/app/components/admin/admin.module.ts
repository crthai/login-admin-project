import { OutinputComponent } from './pages/outinput/outinput.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

//Routing
import { AdminRoutingModule } from './admin-routing.module';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ConfimComponent } from './pages/confim/confim.component';
import { HomeAddComponent } from './pages/home-add/home-add.component';


@NgModule({
  declarations: [
    HomeComponent,
    FormularioComponent,
    ConfimComponent,
    OutinputComponent,
    HomeAddComponent
    ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  exports: [
    OutinputComponent
  ]
})
export class AdminModule { }
