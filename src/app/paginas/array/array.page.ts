import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {

  clientes: Observable<Cliente[]> = this.clientesService.getClientes()
  textoBuscar: string = ''

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
  }
  
  agregarNuevo() {
    let newCliente: Cliente = {
      cedula: '2450123456',
      nombre: 'Katherine',
      apellido: 'Matias',
      telefono: '0948332155',
      edad: 18
    }

    this.clientes = this.clientes.pipe(tap(cliente => { cliente.push(newCliente) }))
  }

}
