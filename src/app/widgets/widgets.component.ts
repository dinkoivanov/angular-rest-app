import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets: Widget[];
  selectedWidget = null;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
  }

  selected(widget) {
    this.selectedWidget = widget;
  }
}
