import { Routes } from '@angular/router';
import { getBookDetailsResolver } from './resolvers/get-book-details.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: ()=>import('./pages/search-book/search-book.component').then(c=>c.SearchBookComponent),
  },
  {
    path:'book/:id',
    resolve: {details:getBookDetailsResolver},
    loadComponent: ()=>import('./pages/book-details/book-details.component').then(c=>c.BookDetailsComponent)
  },
  {
    path: 'login',
    loadComponent: ()=>import('./pages/login/login.component').then(c=>c.LoginComponent)
  },
  {
    path:'publish',
    loadComponent: ()=>import('./pages/sell-form/sell-form.component').then(c=>c.SellFormComponent)
  }
];
