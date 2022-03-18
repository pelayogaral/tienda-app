import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './tienda/articulos/articulos.component';
import { ClientesComponent } from './tienda/clientes/clientes.component';
import { ComprasComponent } from './tienda/compras/compras.component';
import { CrearCompraComponent } from './tienda/compras/crear-compra/crear-compra.component';
import { EditarCompraComponent } from './tienda/compras/editar-compra/editar-compra.component';
import { VerCompraComponent } from './tienda/compras/ver-compra/ver-compra.component';

const routes: Routes = [
  {path:'', component: ComprasComponent, pathMatch:'full'},
  {path:'articulos', component: ArticulosComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'ver-compra/:id', component: VerCompraComponent},
  {path:'editar-compra/:id', component: EditarCompraComponent},
  {path:'crear-compra', component: CrearCompraComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
