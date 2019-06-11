import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item.model';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: Widget[];
  err = '';

  constructor(private itemsService: ItemsService,
              private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.getItems();
    this.getWidgets();
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }

  getWidgets() {
    this.widgetsService.loadAll()
      .subscribe(
        widgets => this.widgets = widgets,
        error => this.err = error        
      );
  }

  handleSearchResults(result) {
    this.items = result;
  }
}
