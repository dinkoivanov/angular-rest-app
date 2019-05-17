import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from 'src/app/shared';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent {
  
  originalName: string;
  selectedWidget: Widget;
  @Output() save: EventEmitter<Widget> = new EventEmitter();
  @Output() cancel: EventEmitter<Widget> = new EventEmitter();

  @Input() set widget(value: Widget){
    if (value) { this.originalName = value.name; }
    this.selectedWidget = Object.assign({}, value);
  }

}
