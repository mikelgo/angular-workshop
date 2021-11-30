import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookApiService {
  private endpoint = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.endpoint}/book/`, book);
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.endpoint}/book`);
  }

  getByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.endpoint}/book/${isbn}`);
  }

  save(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.endpoint}/book/${book.isbn}`, book);
  }
}
