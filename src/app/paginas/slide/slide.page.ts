import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  slideConfig={
    spaceBerween:10,
    centerdSlides:true,
    slidesPerView:1.2,
    loop:false,
    direction:'horizontal'
  }

  productos:
  {
    nombre:string,
    modelo:string,
    foto:string,
    color:string,
    precio:number,
    talla:number
  }[]=[
    {
      nombre:"VASARI",
      modelo:"SKU ID: VZD171640-VC",
      foto:"assets/img/Zapatos1.jpg",
      color:"Negro",
      precio:90,
      talla:40 
    },
    {
      nombre:"VASARI2",
      modelo:"SKU ID: VZD171640-VC2",
      foto:"assets/img/Zapatos2.jpg",
      color:"Negro",
      precio:190,
      talla:42 
    },
    {
      nombre:"VASARI3",
      modelo:"SKU ID: VZD171640-VC3",
      foto:"assets/img/Zapatos3.jpg",
      color:"Gris",
      precio:60,
      talla:41 
    },
    {
      nombre:"VASARI4",
      modelo:"SKU ID: VZD171640-VC4",
      foto:"assets/img/Zapatos4.jpg",
      color:"Cafe",
      precio:100,
      talla:39 
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
