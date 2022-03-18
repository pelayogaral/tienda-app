import { Component} from '@angular/core';
import { ArticuloService } from 'src/app/service/articulo.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styles: [
  ]
})
export class ArticulosComponent {

  constructor(private articuloServicio:ArticuloService) { }


  get articulo(){
    return this.articuloServicio.articulos;
  }


  borrarArticulo(cod:number){
    this.articuloServicio.eliminarArticulo(cod);

  }


}
