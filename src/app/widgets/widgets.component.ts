import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets: Widget[];
  selectedWidget: Widget = null;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    this.reset();
  }

  onSelect(widget: Widget) {
    this.selectedWidget = widget;
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: ''};
  }

  onSave(widget: Widget) {
    console.log('SAVING', widget);
  }

  onDelete(widget: Widget) {
    console.log('DELETING', widget);
  }

  onCancel(widget: Widget) {
    this.reset();
}
}
