import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BookComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
