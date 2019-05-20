import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Widget } from './widget.model';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor(private http: HttpClient) {
  }

  all(): Observable<Widget[]> {
    return this.http.get<Widget[]>(BASE_URL);
  }

  load(id): Observable<Widget> {
    return this.http.get<Widget>(`${BASE_URL}${id}`);
  }

  create(widget: Widget): Observable<Widget> {
    return this.http.post<Widget>(`${BASE_URL}`, JSON.stringify(widget), HEADER);
  }

  update(widget: Widget): Observable<Widget> {
    return this.http.patch<Widget>(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER);
  }

  delete(widget: Widget): Observable<Widget> {
    return this.http.delete<Widget>(`${BASE_URL}${widget.id}`);
  }

}
