import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'botones',
    loadChildren: () => import('./paginas/botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./paginas/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./paginas/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./paginas/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./paginas/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'listas',
    loadChildren: () => import('./paginas/listas/listas.module').then( m => m.ListasPageModule)
  },
  {
    path: 'personas',
    loadChildren: () => import('./paginas/personas/personas.module').then( m => m.PersonasPageModule)
  },
  {
    path: 'listas-personas',
    loadChildren: () => import('./paginas/listas-personas/listas-personas.module').then( m => m.ListasPersonasPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./paginas/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'card-users',
    loadChildren: () => import('./paginas/card-users/card-users.module').then( m => m.CardUsersPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./paginas/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'array',
    loadChildren: () => import('./paginas/array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'facebook',
    loadChildren: () => import('./paginas/facebook/facebook.module').then( m => m.FacebookPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
