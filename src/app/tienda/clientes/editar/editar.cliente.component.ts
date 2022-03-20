import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.cliente.component.html',
  styles: [
  ]
})
export class EditarClienteComponent implements OnInit {

  cliente!: Cliente;
  idCliente: number = 0;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.idCliente = Number(id);
    this.cliente = this.clienteService.detalleCliente(this.idCliente);

  }

  editarCliente(): void{
    this.clienteService.editarCliente(this.idCliente, this.cliente);
    this.router.navigate(['clientes']);
  }

}
