import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        loadChildren: () => import('./paginas/schedule/schedule.module').then( m => m.SchedulePageModule)
      },
      {
        path: 'speakers',
        loadChildren: () => import('./paginas/speakers/speakers.module').then( m => m.SpeakersPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./paginas/map/map.module').then( m => m.MapPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./paginas/about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: '',
        redirectTo: 'schedule',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
