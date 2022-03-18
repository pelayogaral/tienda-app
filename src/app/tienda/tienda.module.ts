import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos/articulos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { FormsModule } from '@angular/forms';
import { EditarArticuloComponent } from './articulos/editar-articulo/editar-articulo.component';
import { CrearArticuloComponent } from './articulos/crear-articulo/crear-articulo.component';
import { VerArticuloComponent } from './articulos/ver-articulo/ver-articulo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent,
    EditarArticuloComponent,
    CrearArticuloComponent,
    VerArticuloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent,
    EditarArticuloComponent,
    CrearArticuloComponent,
    VerArticuloComponent
  ]
})
export class TiendaModule { }
