import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';
import { BookNa } from '../book-na';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: Book = new BookNa();
  bookApiSubscription = new Subscription();

  constructor(private route: ActivatedRoute, private bookApi: BookApiService) {}

  ngOnInit(): void {
    this.bookApiSubscription.add(
      this.route.params
        .pipe(switchMap(params => this.bookApi.getByIsbn(params?.['isbn'])))
        .subscribe(bookFromApi => (this.book = bookFromApi))
    );
  }

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
  }

  save(): void {
    this.bookApiSubscription.add(this.bookApi.save(this.book).subscribe());
  }
}
