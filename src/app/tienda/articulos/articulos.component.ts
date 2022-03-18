import { Component, OnInit } from '@angular/core';
import { Articulo } from '../interfaces/articulo.interface';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styles: [
  ]
})
export class ArticulosComponent implements OnInit {

  articulos:Articulo[]=[
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

  agregarArticulo(articulos:Articulo){
    this.articulos.push(this.articulo);
  }
  editarArticulo(index:number){
    this.articulos.indexOf(this.articulos,index);
  }

  eliminarArticulo(index:number){
    this.articulos.splice(index,1);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
