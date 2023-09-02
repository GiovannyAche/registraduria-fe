import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidoRoutingModule } from './partidos-routing.module';
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
    PartidoRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class PartidosModule { }
