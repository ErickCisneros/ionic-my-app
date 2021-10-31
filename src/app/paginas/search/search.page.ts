import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  clientes: Observable<Cliente[]> = this.clientesService.getClientes()
  textoBuscar: string = ''

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
  }

  editarCliente(cliente: Cliente, ionItemSliding: IonItemSliding) {
    ionItemSliding.close();
    console.log(cliente);
  }

  eliminarClient(cedula: string, ionItemSliding: IonItemSliding) {
    ionItemSliding.close();
    console.log("Cédula:", cedula);
  }

  buscar($event: CustomEvent) {
    this.textoBuscar = $event.detail.value
  }

}
