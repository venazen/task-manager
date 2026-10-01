import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: 'task',
    loadComponent: () => import('./features/task-list/task-list').then((c) => c.TaskList),
  },
  {
    path: 'product',
    loadComponent: () => import('./features/product-list/product-list').then((c) => c.ProductList),
  },
  {
    path: 'z-index-demo',
    loadComponent: () => import('./features/z-index-demo/z-index-demo').then((c) => c.ZIndexDemo),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
];
