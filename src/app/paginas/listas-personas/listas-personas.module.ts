import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasPersonasPageRoutingModule } from './listas-personas-routing.module';

import { ListasPersonasPage } from './listas-personas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasPersonasPageRoutingModule
  ],
  declarations: [ListasPersonasPage]
})
export class ListasPersonasPageModule {}
