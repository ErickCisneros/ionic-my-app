import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  clientes: Observable<Cliente[]> = this.clientesService.getClientes();

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
  }

}
