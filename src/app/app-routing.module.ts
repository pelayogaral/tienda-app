import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './tienda/articulos/articulos.component';
import { ClientesComponent } from './tienda/clientes/clientes.component';
import { CrearClienteComponent } from './tienda/clientes/crear/crear.cliente.component';
import { EditarClienteComponent } from './tienda/clientes/editar/editar.cliente.component';
import { VerClienteComponent } from './tienda/clientes/ver/ver.cliente.component';
import { ComprasComponent } from './tienda/compras/compras.component';

const routes: Routes = [
  {path:'', component: ComprasComponent, pathMatch:'full'},
  {path:'articulos', component: ArticulosComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'crear-cliente', component: CrearClienteComponent},
  {path:'ver-cliente/:id', component: VerClienteComponent},
  {path:'editar-cliente/:id', component: EditarClienteComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
