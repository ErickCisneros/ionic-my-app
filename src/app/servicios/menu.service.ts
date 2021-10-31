import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  private url = "/assets/data/menu.json"

  constructor(private httpClient: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.url)
  }
}
