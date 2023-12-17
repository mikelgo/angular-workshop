import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  book = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract:
      "How to Win Friends and Influence People is a self-help book written by Dale Carnegie, published in 1936. Over 30 million copies have been sold worldwide, making it one of the best-selling books of all time. In 2011, it was number 19 on Time Magazine's list of the 100 most influential books."
  };
}
