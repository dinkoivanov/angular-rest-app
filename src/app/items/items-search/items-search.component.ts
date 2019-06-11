import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ItemsService, Item } from '../../shared';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {

  @ViewChild('itemsSearch') itemsSearch;
  @Output() result = new EventEmitter<Item[]>();

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    const search$ = 
      fromEvent(this.itemsSearch.nativeElement, 'keyup').pipe(
        debounceTime(200),
        map((event : any) => event.target.value),
        distinctUntilChanged(),
        switchMap(value => this.itemsService.search(value))
      );
    search$.subscribe(
      value => this.result.emit(value)
    );
  }

}
