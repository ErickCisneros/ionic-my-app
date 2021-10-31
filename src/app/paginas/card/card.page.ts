import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
 
   data:any[]=[1,2,3,4,5,6];
  constructor() { }

  ngOnInit() {
  }

}
