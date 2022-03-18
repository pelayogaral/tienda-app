import { EventEmitter, Injectable, Output } from '@angular/core';
import { Articulo } from '../tienda/interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {



  _articulos:Articulo[]=[
    {
      codArticulo:123,
      nombre:"Pelota",
      descripcion:"De playa",
      precioPorUnidad:3.24,
      stock:50,
      stockSeguridad:20,
      imagen:"https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/pla_0008.jpg?itok=GgKrJK8c"
    },
    {
      codArticulo:124,
      nombre:"Camión",
      descripcion:"Grande y pesado",
      precioPorUnidad:15000,
      stock:10,
      stockSeguridad:4,
      imagen:"https://live.staticflickr.com/65535/50257639601_0013374d38_b.jpg"
    },
    {
      codArticulo:125,
      nombre:"Ordenador",
      descripcion:"Dell 3 Ghz Intel i-7",
      precioPorUnidad:500.89,
      stock:30,
      stockSeguridad:12,
      imagen:"https://m.media-amazon.com/images/I/311P5DZyq1L._AC_.jpg"
    },
  ];

  articulo:Articulo={
    codArticulo:0,
    nombre:"",
    descripcion:"",
    precioPorUnidad:0,
    stock:0,
    stockSeguridad:0,
    imagen:""
  }

  agregarArticulo(articulo:Articulo):void{
   this._articulos.push(articulo);
  }

  listarArticulo(cod:number){
    for (let i = 0; i < this._articulos.length; i++) {
      if(this._articulos[i].codArticulo===cod){

      }
    }

  }

  modificarArticulo(index:number){

  }

  eliminarArticulo(cod:number):void{
    for(let i=0;this.articulos.length;i++){
      if(this._articulos[i].codArticulo===cod){
        this._articulos.splice(i,1);
      }
    }

  }
  constructor() { }

  get articulos():Articulo[]{
    return[...this._articulos];
  }

}
