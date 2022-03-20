import { Injectable } from '@angular/core';
import { Cliente } from '../tienda/interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    {
      codCliente: 1,
      nombre: 'Marianico el Corto',
      empresa: 'No te rías que es peor',
      puesto: 'Humorista',
      cp: 33900,
      provincia: 'Zaragoza',
      telefono: 6543217,
      fechaNacimiento: new Date()
    },
    {
      codCliente: 2,
      nombre: 'Elena Nito del Bosque',
      empresa: 'Construcciones el Enanito',
      puesto: 'Carpintero',
      cp: 33400,
      provincia: 'Madrid',
      telefono: 6525677,
      fechaNacimiento: new Date()
    },
    {
      codCliente: 3,
      nombre: 'Perico Los Palotes',
      empresa: 'Empresa de Perico',
      puesto: 'Carnicero',
      cp: 32400,
      provincia: 'Asturias',
      telefono: 6983217,
      fechaNacimiento: new Date()
    }
  ]

  borrarCliente(index:number): void {
    this.clientes.splice(index, 1);
  }

  agregarCliente(cliente: Cliente){
    this.clientes.push(cliente);
  }

  detalleCliente(id: number): Cliente{
    return this.clientes[id-1];
  }

  editarCliente(id: number, cliente: Cliente){
    this.clientes[id-1] == cliente;
  }

  constructor() { }
}
