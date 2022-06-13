import { Routes } from '@angular/router';
import { ConfirmLeaveGuard } from '../confirm-leave.guard';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookComponent } from './book.component';

export const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'new',
    component: BookNewComponent
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
