import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookApiService {
  private endpoint = 'http://localhost:4730';

  constructor(private http: HttpClient) {}

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.endpoint}/books/`, book);
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.endpoint}/books`);
  }

  getByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.endpoint}/books/${isbn}`);
  }

  save(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.endpoint}/books/${book.isbn}`, book);
  }
}
