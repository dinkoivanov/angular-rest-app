import { Component, OnInit } from '@angular/core';
import { Item, ItemsService } from '../shared';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.all().subscribe(
      items => this.items = items
    )
  }


}
