import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page.component'),
    pathMatch: 'full',
  },

  {
    path: 'about-me',
    loadComponent: () => import('./pages/about-me/about-me.component'),
    pathMatch: 'full',
    title: 'Sobre',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
