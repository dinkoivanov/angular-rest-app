import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private subject = new Subject();
  notifications$ = this.subject.asObservable();

  emit(notification) {
    this.subject.next(notification);
  }
}
