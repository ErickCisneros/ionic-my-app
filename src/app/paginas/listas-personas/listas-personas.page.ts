import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listas-personas',
  templateUrl: './listas-personas.page.html',
  styleUrls: ['./listas-personas.page.scss'],
})
export class ListasPersonasPage implements OnInit {

  clientes: Cliente[]=[];
  datosWeb:any[]=[];

  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
    this.cargarClientesConFormato();
    this.cargarDatosSinFormato();
  }

  cargarClientesConFormato() {
    this.clientesService.getClientes().subscribe(
      respuesta => {
        console.log(respuesta);
        this.clientes = respuesta;
      }
    );
  }

  cargarDatosSinFormato() {
    this.clientesService.getPruebas().subscribe(
      respuesta => {
        console.log(respuesta);
        this.datosWeb = respuesta;
      }
    );
  }

  Editar(cliente: Cliente, ionItemSliding: IonItemSliding) {
    ionItemSliding.close();
    console.log(cliente);
  }

  Eliminar(cedula: string, ionItemSliding: IonItemSliding) {
    ionItemSliding.close();
    console.log("Cédula:", cedula);
  }

}
