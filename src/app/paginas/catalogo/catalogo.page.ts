import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ropa } from 'src/app/interfaces/ropa';
import { CatalogoService } from 'src/app/servicios/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  slideConfig = {
    spaceBerween: 10,
    centerdSlides: true,
    slidesPerView: 1.2,
    loop: false,
    direction: 'horizontal'
  }

  ropas: Observable<Ropa[]> = this.catalogoService.getRopas()

  constructor(private catalogoService: CatalogoService) { }

  ngOnInit() {
  }

}
