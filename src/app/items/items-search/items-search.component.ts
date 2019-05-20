import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ItemsService, Item } from 'src/app/shared';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {

  @ViewChild('itemsSearch') itemsSearch;
  @Output() results = new EventEmitter<Item[]>();

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    const search$ = 
      fromEvent(this.getNativeElement(this.itemsSearch), 'keyup')
      .pipe(
        debounceTime(200),
        map((event: any) => event.target.value),
        distinctUntilChanged(),
        switchMap(value => this.itemsService.search(value))
      ).subscribe(items => this.results.emit(items));
  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
