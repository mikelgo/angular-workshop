import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  bookSearchTerm = '';
  books$: Observable<Book[]>;

  constructor(private bookApi: BookApiService) {
    this.books$ = this.bookApi.getAll();
  }

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon ...');
    console.table(book);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
