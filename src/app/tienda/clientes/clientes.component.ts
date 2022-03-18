import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private serviceCliente: ClienteService) { }

  ngOnInit(): void {
    this.clientes = this.serviceCliente.clientes;
  }

  borrarcliente(index: number){
    this.serviceCliente.borrarCliente(index);
  }

}
