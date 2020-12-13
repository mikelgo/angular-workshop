import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private bookApi: BookApiService) {
    this.books$ = this.bookApi.getAll();
  }

  goToBookDetails(book: Book) {
    this.router.navigate(['books', 'details', book.isbn]);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
