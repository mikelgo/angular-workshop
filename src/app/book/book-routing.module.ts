import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmLeaveGuard } from '../confirm-leave.guard';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'details/:isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmLeaveGuard]
  },
  {
    path: 'edit/:isbn',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
