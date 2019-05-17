import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from 'src/app/shared';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent {

  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() select: EventEmitter<Widget> = new EventEmitter();
  @Output() delete: EventEmitter<Widget> = new EventEmitter();

}
