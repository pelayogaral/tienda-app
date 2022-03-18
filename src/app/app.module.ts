import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaModule } from './tienda/tienda.module';
import { MenuModule } from './shared/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './service/cliente.service';
import { FormsModule } from '@angular/forms';
import { ComprasService } from './service/compras.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TiendaModule,
    MenuModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
