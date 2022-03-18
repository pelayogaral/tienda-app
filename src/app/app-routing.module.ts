import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './tienda/articulos/articulos.component';
import { ClientesComponent } from './tienda/clientes/clientes.component';
import { ComprasComponent } from './tienda/compras/compras.component';

const routes: Routes = [
  {path:'', component: ComprasComponent, pathMatch:'full'},
  {path:'articulos', component: ArticulosComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
