import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.cliente.component.html',
  styles: [
  ]
})
export class VerClienteComponent implements OnInit {

  cliente!: Cliente;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('id');
      this.cliente = this.clienteService.detalleCliente(Number(id));
      console.log(id);

  }

}
