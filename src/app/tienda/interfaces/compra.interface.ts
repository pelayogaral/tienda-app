import { Articulo } from "./articulo.interface";
import { Cliente } from "./cliente.interface";


export interface Compra
{
  cliente:Cliente;
  articulo:Articulo;
  fecha:Date;
  unidades:number;

}
