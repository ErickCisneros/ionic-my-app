import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getFacebookData(): Observable<Card[]> {
    return this.httpClient.get<Card[]>('assets/data/facebook.json')
  }
}
