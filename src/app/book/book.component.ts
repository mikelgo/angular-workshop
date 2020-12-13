import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {
  bookSearchTerm = '';
  books: Book[] = [];
  bookApiSubscription = Subscription.EMPTY;

  constructor(private bookApi: BookApiService) {}

  ngOnInit(): void {
    this.bookApiSubscription = this.bookApi
      .getAll()
      .subscribe(booksFromApi => (this.books = booksFromApi));
  }

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
  }

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon ...');
    console.table(book);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
