import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos/articulos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';



@NgModule({
  declarations: [
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent
  ]
})
export class TiendaModule { }
