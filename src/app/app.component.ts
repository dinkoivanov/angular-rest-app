import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from './shared/notification.service';

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
    { path: '/items2', icon: 'list', label: 'Items2'},
    { path: '/widgets', icon: 'view_quilt', label: 'Widgets'}
  ];

  constructor(private snackbar: MatSnackBar, 
              private ns: NotificationService) {

              }

  ngOnInit(): void {
    this.ns.notifications$.subscribe(message => {
      this.snackbar.open(message, 'OK', {
        duration: 3000
      });
    });    
  }  

  
}
