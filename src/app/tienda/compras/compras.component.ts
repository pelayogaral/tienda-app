import { Component, OnInit } from '@angular/core';
import { Compra } from "../interfaces/compra.interface";
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styles: [
  ]
})
export class ComprasComponent implements OnInit {

  compras:Compra[]=[
    {
      cliente:'Pelayo',
      articulo:'Pelota',
      fecha: new Date(),
      unidades:10
    },
    {
      cliente:'Pablo',
      articulo:'Camion',
      fecha: new Date(),
      unidades:7
    },{
      cliente:'Rafael',
      articulo:'Ordenador',
      fecha: new Date(),
      unidades:22
    },
  ];
  nuevo:Compra={
      cliente:'',
      articulo:'',
      fecha: new Date(),
      unidades:0
  };
  editar:boolean=false;
  crear:boolean=false;
  ver:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  borrarCompra(index:number): void
  {
    this.compras.splice(index, 1);
  }
  crearVista():void
  {
    this.crear = true;
    this.editar = false;
    this.ver = false;
  }
  salir():void
  {
    this.crear = false;
    this.editar = false;
    this.ver = false;
  }
  agregarCompra():void{

  }
}
