import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {
      codCliente: 1001,
      nombre: 'Marianico el Corto',
      empresa: 'No te rías que es peor',
      puesto: 'Humorista',
      cp: 33900,
      provincia: 'Zaragoza',
      telefono: 6543217,
      fechaNacimiento: new Date()
    },
    {
      codCliente: 1001,
      nombre: 'Elena Nito del Bosque',
      empresa: 'Construcciones el Enanito',
      puesto: 'Carpintero',
      cp: 33400,
      provincia: 'Madrid',
      telefono: 6525677,
      fechaNacimiento: new Date()
    },
    {
      codCliente: 1001,
      nombre: 'Perico Los Palotes',
      empresa: 'Empresa de Perico',
      puesto: 'Carnicero',
      cp: 32400,
      provincia: 'Asturias',
      telefono: 6983217,
      fechaNacimiento: new Date()
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
