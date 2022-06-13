import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./book/book.routes').then(module => module.routes)
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
