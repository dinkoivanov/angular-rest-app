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
    this.getWidgets();
    this.reset();
  }
  getWidgets() {
    this.widgetsService.all().subscribe(widgets => this.widgets = widgets);
  }

  onSelect(widget: Widget) {
    this.selectedWidget = widget;
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: ''};
  }

  onSave(widget: Widget) {
    if (!widget.id) {
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    this.widgetsService.create(widget)
      .subscribe(response => {
        this.getWidgets();
        this.reset();
      });
  }

  updateWidget(widget: Widget) {
    this.widgetsService.update(widget)
      .subscribe(response => {
        this.getWidgets();
        this.reset();
      });
  }

  onDelete(widget: Widget) {
    this.widgetsService.delete(widget)
      .subscribe(response => {
        this.getWidgets();
        this.reset();
      });
  }

  onCancel(widget: Widget) {
    this.reset();
}
}
