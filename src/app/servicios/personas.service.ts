import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private httpClient: HttpClient) { }

  getPersonas() {
    let miURL = "/assets/data/persona.json"
    return this.httpClient.get<Persona[]>(miURL)
  }
}
