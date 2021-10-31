import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';
import { Persona } from 'src/app/interfaces/persona';
import { PersonasService } from 'src/app/servicios/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {

  public personas: Persona[];
  public mascotas: Mascota[];
  public personaActual: Persona;

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
    this.personasService.getPersonas().subscribe(res => {
      this.personas = res;
      this.personaActual = this.personas[0];
      this.mascotas = this.personaActual.mascotas;
    })
  }

  public cambiarPersona(cedula: string) {
    this.personaActual = this.personas.find(persona => persona.cedula === cedula)
    this.mascotas = this.personaActual.mascotas;
  }

}
