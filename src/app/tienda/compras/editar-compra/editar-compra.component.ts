import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComprasService } from 'src/app/service/compras.service';
import { Compra } from '../../interfaces/compra.interface';

@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styles: [
  ]
})
export class EditarCompraComponent implements OnInit {

  constructor(private compraServicio:ComprasService, private route:Router,private routerActive:ActivatedRoute) { }
  @Input() compras!:Compra;
  parametro:number = 0;
  get clientesService(){
    console.log(this.compraServicio.clientes);
    return this.compraServicio.clientes;
  }
  get articulosService(){
    console.log(this.compraServicio.articulos);
    return this.compraServicio.articulos;
  }
  ngOnInit(): void {
    this.routerActive.paramMap.subscribe(
      param =>{let id = param.get('id');
      this.parametro = Number(id);
      this.compras = this.compraServicio.buscarCompra(this.parametro);
    });
  }
  editarCompra():void
  {
    let valCliente = (<HTMLSelectElement>document.getElementById('cliente')).value;
    console.log(valCliente);
    let valArticulo = (<HTMLSelectElement>document.getElementById('articulo')).value;
    console.log(valArticulo);
    this.compras.cliente = this.compraServicio.clientes[Number(valCliente)];
    this.compras.articulo = this.compraServicio.articulos[Number(valArticulo)];
    this.compraServicio.editarCompra(this.parametro, this.compras);
    this.route.navigate(['']);
  }

}
