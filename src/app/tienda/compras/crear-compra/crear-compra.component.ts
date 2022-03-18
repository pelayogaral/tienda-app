import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComprasService } from 'src/app/service/compras.service';
import { Compra } from '../../interfaces/compra.interface';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
})
export class CrearCompraComponent implements OnInit {

  constructor(private compraServicio:ComprasService, private route:Router) { }
  @Input() compras:Compra[]=[];
  nuevo:Compra={
    cliente: this.compraServicio.clientes[0],
    articulo: this.compraServicio.articulos[0],
    fecha: new Date(),
    unidades:0
  };
  get clientesService(){
    return this.compraServicio.clientes;
  }
  get articulosService(){
    return this.compraServicio.articulos;
  }
  ngOnInit(): void {
  }
  agregarCompra():void
  {
    let valCliente = (<HTMLSelectElement>document.getElementById('cliente')).value;
    console.log(valCliente);
    let valArticulo = (<HTMLSelectElement>document.getElementById('articulo')).value;
    console.log(valArticulo);
    this.nuevo.cliente = this.compraServicio.clientes[Number(valCliente)];
    this.nuevo.articulo = this.compraServicio.articulos[Number(valArticulo)];
    this.compraServicio.agregarCompra(this.nuevo);
    this.route.navigate(['']);
  }

}
