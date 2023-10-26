import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  bookSearchTerm = '';
  books: Signal<Book[] | undefined>;

  constructor(private router: Router, private bookApi: BookApiService) {
    this.books = toSignal(this.bookApi.getAll());
  }

  goToBookDetails(book: Book) {
    this.router.navigate(['books', 'details', book.isbn]);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
