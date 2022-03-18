import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticuloService } from 'src/app/service/articulo.service';
import { Articulo } from '../../interfaces/articulo.interface';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styles: [
  ]
})
export class CrearArticuloComponent {

  articulo:Articulo={
    codArticulo:0,
    nombre:"",
    descripcion:"",
    precioPorUnidad:0,
    stock:0,
    stockSeguridad:0,
    imagen:""
  }

  @Output() onNuevoArticulo: EventEmitter<Articulo>=new EventEmitter();

  constructor(private articuloServicio:ArticuloService){}

  crearArticulo():void{
    if(this.articulo.nombre.trim().length===0){
      return;
    }
  this.onNuevoArticulo.emit(this.articulo);
  this.articuloServicio.agregarArticulo(this.articulo);
  this.articulo={
    codArticulo:0,
    nombre:"",
    descripcion:"",
    precioPorUnidad:0,
    stock:0,
    stockSeguridad:0,
    imagen:""
  }
  }
}
