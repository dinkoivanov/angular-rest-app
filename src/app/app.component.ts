import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationsService } from './shared/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular REST App';
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/items', icon: 'list', label: 'Items'},
    { path: '/widgets', icon: 'view_quilt', label: 'Widgets'}
  ];

  constructor(private snackbar: MatSnackBar, private ns: NotificationsService) {}

  ngOnInit() {
    this.ns.notifications$.subscribe((notification) => this.showNotification(notification));
    this.ns.emit('Loaded');
  }

  showNotification(notification) {
    this.snackbar.open(notification, 'OK', {
      duration: 3000
    });
  }
}
