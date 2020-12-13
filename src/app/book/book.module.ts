import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookNewComponent } from './book-new/book-new.component';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BookRoutingModule],
  exports: [BookComponent]
})
export class BookModule {}
