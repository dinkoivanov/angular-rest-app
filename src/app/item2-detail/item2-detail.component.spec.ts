import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2DetailComponent } from './item2-detail.component';

describe('Item2DetailComponent', () => {
  let component: Item2DetailComponent;
  let fixture: ComponentFixture<Item2DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
