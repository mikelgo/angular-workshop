import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookComponent } from './book.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    BookDetailComponent
  ],
  imports: [CommonModule],
  exports: [BookComponent]
})
export class BookModule {}
