import { Component, OnInit } from '@angular/core';
import { Item, ItemsService } from '../shared';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item2-detail',
  templateUrl: './item2-detail.component.html',
  styleUrls: ['./item2-detail.component.css']
})
export class Item2DetailComponent implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute,
              private itemsService: ItemsService,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let id = +params.get('id');
        return this.itemsService.load(id);
      })
    ).subscribe(
      item => this.item = item
    );
  }

  handleCancel() {
    this.router.navigate(['/items2']);
  }

}
