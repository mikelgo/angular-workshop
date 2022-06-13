import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bookApi: BookApiService) {
    this.book$ = this.route.params.pipe(
      switchMap(params => this.bookApi.getByIsbn(params?.['isbn']))
    );
  }
}
