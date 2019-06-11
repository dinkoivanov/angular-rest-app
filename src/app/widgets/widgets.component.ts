import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets: Widget[];
  selectedWidget: Widget = null;

  constructor(private widgetsService: WidgetsService,
              private ns: NotificationService) { }

  ngOnInit() {
    this.getWidgets();
    this.reset();
  }

  getWidgets() {
    this.widgetsService.loadAll().subscribe(
      widgets => this.widgets = widgets);
  }

  onSelect(widget: Widget) {
    this.selectedWidget = widget;
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: ''};
  }

  onSave(widget: Widget) {
    if (widget.id) {
      this.widgetsService.update(widget).subscribe(
        widget => {
          this.getWidgets();
          this.reset();
          this.ns.notify('Widget updated');
        }
      );
    } else {
      this.widgetsService.create(widget).subscribe(
        widget => {
          this.getWidgets();
          this.reset();
          this.ns.notify('Widget created');
        }
      );
    }
  }

  onDelete(widget: Widget) {
    let name = widget.name;
    this.widgetsService.delete(widget).subscribe(
      widget => {
        this.getWidgets();
        this.reset();
        this.ns.notify(`Widget '${name}' deleted`);
      }
    );
  }

  onCancel(widget: Widget) {
    this.reset();
}
}
