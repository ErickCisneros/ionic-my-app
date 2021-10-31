import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/servicios/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menu: Observable<Menu[]> = this.menuService.getMenu();
  
  constructor(
    private menuService: MenuService
  ) { }
  
  ngOnInit() {}

}
