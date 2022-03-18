import { Component, Input, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/service/compras.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styles: [
  ]
})
export class ComprasComponent implements OnInit {


  // @Input() compras:Compra[]=[];
  // nCliente:Cliente=
  //   {codCliente: 0,
  //     nombre: '',
  //     empresa: '',
  //     puesto: '',
  //     cp: 0,
  //     provincia: '',
  //     telefono: 0,
  //     fechaNacimiento: new Date()
  //   }
  // ;
  // nArticulo:Articulo=
  //     {
  //       codArticulo:0,
  //       nombre:"",
  //       descripcion:"",
  //       precioPorUnidad:0,
  //       stock:0,
  //       stockSeguridad:0,
  //       imagen:""
  //     };
  // nuevo:Compra=
  // {
  //     cliente:this.nCliente,
  //     articulo:this.nArticulo,
  //     fecha: new Date(),
  //     unidades:0
  // };
  editar:boolean=false;
  crear:boolean=false;
  ver:boolean=false;
  constructor(private compraSerivicio:ComprasService, private route:Router) { }

  ngOnInit(): void {
  }
  borrarCompra(index:number): void
  {
    this.compraSerivicio.eliminarCompra(index);
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
    this.route.navigate(['/clientes']);
  }
  get comprasService(){
    return this.compraSerivicio.compras;
  }
  get clientesService(){
    return this.compraSerivicio.clientes;
  }
  get articulosService(){
    return this.compraSerivicio.articulos;
  }
}
