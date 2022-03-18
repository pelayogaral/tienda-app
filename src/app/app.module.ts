import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './tienda/clientes/clientes.component';
import { ArticulosComponent } from './tienda/articulos/articulos.component';
import { ComprasComponent } from './tienda/compras/compras.component';
import { TiendaModule } from './tienda/tienda.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TiendaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
