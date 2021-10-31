import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  getClientes() {
    let miURL = "/assets/data/clientes.json"
    return this.httpClient.get<Cliente[]>(miURL)
  }

  getPruebas(){
    let miUrl="https://jsonplaceholder.typicode.com/photos";
    return this.httpClient.get<any[]>(miUrl);
  }
}
