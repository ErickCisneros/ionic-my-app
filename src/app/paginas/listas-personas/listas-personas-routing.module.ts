import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasPersonasPage } from './listas-personas.page';

const routes: Routes = [
  {
    path: '',
    component: ListasPersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasPersonasPageRoutingModule {}
