import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos/articulos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { FormsModule } from '@angular/forms';
import { CrearCompraComponent } from './compras/crear-compra/crear-compra.component';
import { EditarCompraComponent } from './compras/editar-compra/editar-compra.component';
import { VerCompraComponent } from './compras/ver-compra/ver-compra.component';



@NgModule({
  declarations: [
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent,
    CrearCompraComponent,
    EditarCompraComponent,
    VerCompraComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent,
    CrearCompraComponent,
    EditarCompraComponent,
    VerCompraComponent
  ]
})
export class TiendaModule { }
