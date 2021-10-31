import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardUsersPage } from './card-users.page';

const routes: Routes = [
  {
    path: '',
    component: CardUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardUsersPageRoutingModule {}
