import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

/** Integration boundary for a future Koha REST endpoint. Keep the base URL and auth outside the browser bundle. */
@Injectable({ providedIn: 'root' })
export class KohaApiService {
  private readonly http = inject(HttpClient);
  search(endpoint: string, query: string): Observable<Book[]> {
    return this.http.get<Book[]>(endpoint, { params: { q: query } });
  }
}
