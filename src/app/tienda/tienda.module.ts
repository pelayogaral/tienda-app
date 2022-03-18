import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos/articulos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { FormsModule } from '@angular/forms';
import { CrearCompraComponent } from './compras/crear-compra/crear-compra.component';
import { EditarCompraComponent } from './compras/editar-compra/editar-compra.component';
import { VerCompraComponent } from './compras/ver-compra/ver-compra.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { CrearClienteComponent } from './clientes/crear/crear.cliente.component';
import { EditarClienteComponent } from './clientes/editar/editar.cliente.component';
import { VerClienteComponent } from './clientes/ver/ver.cliente.component';



@NgModule({
  declarations: [
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent,
    CrearCompraComponent,
    EditarCompraComponent,
    VerCompraComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    VerClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports:[
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent,
    CrearCompraComponent,
    EditarCompraComponent,
    VerCompraComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    VerClienteComponent
  ]
})
export class TiendaModule { }
