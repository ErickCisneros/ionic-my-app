import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardUsersPageRoutingModule } from './card-users-routing.module';

import { CardUsersPage } from './card-users.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardUsersPageRoutingModule,
    ComponentesModule
  ],
  declarations: [CardUsersPage]
})
export class CardUsersPageModule {}
