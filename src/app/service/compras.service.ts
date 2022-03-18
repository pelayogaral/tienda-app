import { Injectable } from '@angular/core';
import { Articulo } from '../tienda/interfaces/articulo.interface';
import { Cliente } from '../tienda/interfaces/cliente.interface';
import { Compra } from '../tienda/interfaces/compra.interface';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private _clientes: Cliente[] = [
    {
      codCliente: 1001,
      nombre: 'Marianico el Corto',
      empresa: 'No te rías que es peor',
      puesto: 'Humorista',
      cp: 33900,
      provincia: 'Zaragoza',
      telefono: 6543217,
      fechaNacimiento: new Date()
    },
    {
      codCliente: 1002,
      nombre: 'Elena Nito del Bosque',
      empresa: 'Construcciones el Enanito',
      puesto: 'Carpintero',
      cp: 33400,
      provincia: 'Madrid',
      telefono: 6525677,
      fechaNacimiento: new Date()
    },
    {
      codCliente: 1003,
      nombre: 'Perico Los Palotes',
      empresa: 'Empresa de Perico',
      puesto: 'Carnicero',
      cp: 32400,
      provincia: 'Asturias',
      telefono: 6983217,
      fechaNacimiento: new Date()
    }
  ];
  private _articulos:Articulo[]=[
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
  private _compras:Compra[]=[
    {
      cliente:this._clientes[0],
      articulo:this._articulos[0],
      fecha: new Date(),
      unidades:10
    },
    {
      cliente:this._clientes[1],
      articulo:this._articulos[1],
      fecha: new Date(),
      unidades:7
    },{
      cliente:this._clientes[2],
      articulo:this._articulos[2],
      fecha: new Date(),
      unidades:22
    },
  ];
  get compras():Compra[]{
    return[...this._compras]; //Operador de split
  }
  get clientes():Cliente[]{
    return[...this._clientes]; //Operador de split
  }
  get articulos():Articulo[]{
    return[...this._articulos]; //Operador de split
  }
  agregarCompra(compra:Compra){
    this._compras.push(compra);
  }
  editarCompra(id:number, compra:Compra){
    this._compras[id] == compra;
  }
  eliminarCompra(index:number){
    this._compras.splice(index, 1);
  }
  buscarCompra(id:number):Compra
  {
    return this._compras[id];
  }
  constructor() { }
}
