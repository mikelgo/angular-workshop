import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnDestroy {
  newForm: FormGroup;
  bookApiSubscription = new Subscription();

  constructor(private form: FormBuilder, private bookApi: BookApiService) {
    this.newForm = this.form.group({
      isbn: ['', [Validators.required]],
      title: ['', [Validators.required]],
      author: ['', []],
      abstract: ['', []]
    });
  }

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
  }

  create(): void {
    if (this.newForm.invalid) {
      return;
    }

    this.bookApiSubscription.add(
      this.bookApi.create(this.newForm.value).subscribe()
    );
  }
}
