import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  customStyle = { color: '#064D9E', fontWeight: 600 };

  @Input({ required: true }) content!: Book;
  @Output() detailClick = new EventEmitter<Book>();

  handleDetailClick(click: MouseEvent) {
    click.preventDefault();

    console.log('Click Details-Link:', click);

    this.detailClick.emit(this.content);
  }
}
