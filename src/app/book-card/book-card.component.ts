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

  handleDetailClick(click: MouseEvent) {
    // prevent browser reload on click.
    click.preventDefault();

    console.log(`The book "${this.content.title}" has been clicked.`);
  }
}
