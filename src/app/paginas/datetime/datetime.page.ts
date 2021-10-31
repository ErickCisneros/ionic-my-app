import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaActual: Date = new Date(); //Fecha actual

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log("Fecha: " + new Date(event.detail.value))
  }

}
