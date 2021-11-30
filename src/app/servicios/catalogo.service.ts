import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ropa } from '../interfaces/ropa';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private readonly CATALOGO_URL = "/assets/data/catalogo.json"

  constructor(private httpClient: HttpClient) { }

  getRopas() {
    return this.httpClient.get<Ropa[]>(this.CATALOGO_URL)
  }
}
