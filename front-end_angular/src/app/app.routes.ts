import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page/home-page.component'),
    pathMatch: 'full',
  },
  {
    path: 'not-found',
    loadComponent: () => import('./pages/not-found/not-found.component'),
    pathMatch: 'full',
  },
  {
    path: 'auth-user/login',
    loadComponent: () => import('./pages/user/auth/login/login.component'),
    pathMatch: 'full',
  },
  {
    path: 'auth-user/cadastro',
    loadComponent: () =>
      import('./pages/user/auth/register/register.component'),
    pathMatch: 'full',
  },
  {
    path: 'user/profile',
    loadComponent: () => import('./pages/user/profile/profile.component'),
    pathMatch: 'full',
  },
  {
    path: 'policy-of-privacity',
    loadComponent: () =>
      import('./pages/policy-of-privacity/policy-of-privacity.component'),
    pathMatch: 'full',
  },
  {
    path: 'post:id',
    loadComponent: () =>
      import('./pages/post/content-post/content-post.component'),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
