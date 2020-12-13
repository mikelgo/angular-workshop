import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnDestroy {
  newForm = this.buildForm();
  bookApiSubscription = new Subscription();

  constructor(private form: FormBuilder, private bookApi: BookApiService) {}

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
    this.newForm.controls
  }

  create(): void {
    if (this.newForm.invalid) return;

    this.bookApiSubscription.add(
      this.bookApi.create(this.newForm.getRawValue()).subscribe()
    );
  }

  private buildForm() {
    return this.form.nonNullable.group({
      isbn: ['', [Validators.required]],
      title: ['', [Validators.required]],
      cover: [''],
      author: [''],
      abstract: ['']
    }, );
  }
}
