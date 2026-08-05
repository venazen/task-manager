import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: 'task', loadComponent: () => import('./features/task-list/task-list').then(c => c.TaskList)},
  { path: 'product', loadComponent: () => import('./features/product-list/product-list').then(c => c.ProductList)},
  { path: '', component: Home},
];
