import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/service/articulo.service';

@Component({
  selector: 'app-ver-articulo',
  templateUrl: './ver-articulo.component.html',
  styles: [
  ]
})
export class VerArticuloComponent implements OnInit{

  constructor(private articuloServicio:ArticuloService,private routerActive:ActivatedRoute){}

  ngOnInit(): void {
    /*
    this.routerActive.paramMap.subscribe(
      param=>{
        let id=param.get('id');
        this.articuloServicio.buscarCodigo(String(id));

    this.articuloServicio.buscarCodigo(String(id)).subscribe(
      resp=>{this.articulos=resp}
    );}
    );
*/
  }




  verArticulo(index:number){
    this.articuloServicio.listarArticulo(index);
  }

}
