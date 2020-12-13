import { Component, Input } from '@angular/core';
import { Book } from '../book';
import { BookNa } from '../book-na';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() content: Book = new BookNa();

  customStyle = { color: '#064D9E', fontWeight: 600 };
}
