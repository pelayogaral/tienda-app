import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.cliente.component.html',
  styles: [
  ]
})
export class CrearClienteComponent implements OnInit {

  nuevoCliente: Cliente = {
    codCliente: 0,
    nombre: '',
    empresa: '',
    puesto: '',
    cp: 0,
    provincia: '',
    telefono: 0,
    fechaNacimiento: new Date()
  }

  @Output() onNuevoCliente: EventEmitter<Cliente> = new EventEmitter();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  agregar(): void{
    if (this.nuevoCliente.nombre.trim().length === 0) {
      return;
    }
    this.onNuevoCliente.emit(this.nuevoCliente);
    this.clienteService.agregarCliente(this.nuevoCliente);
    this.nuevoCliente = {
      codCliente: 0,
      nombre: '',
      empresa: '',
      puesto: '',
      cp: 0,
      provincia: '',
      telefono: 0,
      fechaNacimiento: new Date()
    };
  }

}
