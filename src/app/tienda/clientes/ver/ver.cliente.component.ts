import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {
  }

}
