import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  // TODO: Replace any with proper type since can it cause critical runtime errors.
  @Input() content: any;

  customStyle = { color: '#064D9E', fontWeight: 600 };
}
