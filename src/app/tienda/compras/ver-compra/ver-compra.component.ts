import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComprasService } from 'src/app/service/compras.service';
import { Compra } from '../../interfaces/compra.interface';

@Component({
  selector: 'app-ver-compra',
  templateUrl: './ver-compra.component.html',
  styles: [
  ]
})
export class VerCompraComponent implements OnInit {
  @Input() compras!:Compra;
  constructor(private compraServicio:ComprasService, private route:Router,private routerActive:ActivatedRoute) { }
  parametro:number = 0;
  ngOnInit(): void {
    this.routerActive.paramMap.subscribe(
      param =>{let id = param.get('id');
      this.parametro = Number(id);
      this.compras = this.compraServicio.buscarCompra(this.parametro);
    });
  }

}
