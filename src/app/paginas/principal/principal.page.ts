import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saludar(){
    console.log("Hola Mundo");
    //programar para ir a la página botones
  }
}
