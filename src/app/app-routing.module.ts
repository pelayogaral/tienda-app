import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './tienda/articulos/articulos.component';
import { CrearArticuloComponent } from './tienda/articulos/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './tienda/articulos/editar-articulo/editar-articulo.component';
import { VerArticuloComponent } from './tienda/articulos/ver-articulo/ver-articulo.component';
import { ClientesComponent } from './tienda/clientes/clientes.component';
import { ComprasComponent } from './tienda/compras/compras.component';

const routes: Routes = [
  {path:'', component: ComprasComponent, pathMatch:'full'},
  {path:'articulos', component: ArticulosComponent},
  {path:'crear-articulo', component: CrearArticuloComponent},
  {path:'ver-articulo/:id', component: VerArticuloComponent},
  {path:'editar-articulo/:id', component: EditarArticuloComponent},
  {path:'articulos', component: ArticulosComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
