import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    BookDetailComponent,
    BookEditComponent
  ],
  imports: [CommonModule, FormsModule, BookRoutingModule],
  exports: [BookComponent]
})
export class BookModule {}
