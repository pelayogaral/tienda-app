import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos/articulos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent
  ]
})
export class TiendaModule { }
