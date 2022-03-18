import { Component, Input} from '@angular/core';
import { ArticuloService } from 'src/app/service/articulo.service';
import { Articulo } from '../../interfaces/articulo.interface';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styles: [
  ]
})
export class EditarArticuloComponent{

  @Input() articulos!:Articulo;
  @Input() i:number=0;

  constructor(private articuloServicio:ArticuloService){}


  editarArticulo(index:number){
    this.articuloServicio.modificarArticulo(index);
  }

}
