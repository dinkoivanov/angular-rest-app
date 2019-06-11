import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject: Subject<any> = new Subject();
  notifications$ = this.subject.asObservable();

  notify(message) {
    this.subject.next(message);
  }
}
