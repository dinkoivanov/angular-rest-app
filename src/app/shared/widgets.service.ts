import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget } from './widget.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = "http://localhost:3000/widgets/";

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor(private http: HttpClient) { }

  loadAll(): Observable<Widget[]> {
    return this.http.get<Widget[]>(BASE_URL).pipe(
      catchError((error) => {
        return throwError('Something bad happened');
      })
    );
  }

  load(id): Observable<Widget> {
    return this.http.get<Widget>(`${BASE_URL}${id}`);
  }

  create(widget: Widget): Observable<Widget> {
    return this.http.post<Widget>(`${BASE_URL}`, widget);
  }

  update(widget: Widget): Observable<Widget> {
    return this.http.patch<Widget>(`${BASE_URL}${widget.id}`, widget);
  }

  delete(widget: Widget): Observable<Widget> {
    return this.http.delete<Widget>(`${BASE_URL}${widget.id}`);
  }

}
