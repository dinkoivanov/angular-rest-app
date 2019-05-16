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

  selected(widget: Widget) {
    this.selectedWidget = widget;
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: ''};
  }

  saved(widget: Widget) {
    console.log('SAVING', widget);
  }

  cancelled(widget: Widget) {
    this.reset();
}
}
