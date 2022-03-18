import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos/articulos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CrearClienteComponent } from './clientes/crear/crear.cliente.component';
import { EditarClienteComponent } from './clientes/editar/editar.cliente.component';
import { VerClienteComponent } from './clientes/ver/ver.cliente.component';



@NgModule({
  declarations: [
    ArticulosComponent,
    ClientesComponent,
    ComprasComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    VerClienteComponent
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
    CrearClienteComponent,
    EditarClienteComponent,
    VerClienteComponent
  ]
})
export class TiendaModule { }
