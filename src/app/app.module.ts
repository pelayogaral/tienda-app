import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './tienda/clientes/clientes.component';
import { ArticulosComponent } from './tienda/articulos/articulos.component';
import { ComprasComponent } from './tienda/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ArticulosComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
