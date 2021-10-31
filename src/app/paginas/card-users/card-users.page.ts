import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-card-users',
  templateUrl: './card-users.page.html',
  styleUrls: ['./card-users.page.scss'],
})
export class CardUsersPage implements OnInit {

  users: Observable<User[]> = this.userService.getUsers();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
