import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesaRoutingModule } from './mesas-routing.module';
import { NbCardModule } from '@nebular/theme';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule, 
    MesaRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class MesasModule { }
