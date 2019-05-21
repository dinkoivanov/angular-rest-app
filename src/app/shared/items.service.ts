import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/items/';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<Item[]> {
    return this.http.get<Item[]>(BASE_URL);
  }

  load(id): Observable<Item> {
    return this.http.get<Item>(`${BASE_URL}${id}`);
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(`${BASE_URL}`, JSON.stringify(item), HEADER);
  }

  update(item: Item): Observable<Item> {
    return this.http.patch<Item>(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER);
  }

  delete(item: Item): Observable<Item> {
    return this.http.delete<Item>(`${BASE_URL}${item.id}`);
  }

  search(term: string): Observable<Item[]> {
    term = term.trim();
    const options = term ? { params: new HttpParams().set('q', term) } : {};

    return this.http.get<Item[]>(`${BASE_URL}`, options);
  }
}
