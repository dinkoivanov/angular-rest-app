import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManjaRoutingModule } from './manja-routing.module';
import { BobComponent } from './bob/bob.component';

@NgModule({
  declarations: [BobComponent],
  imports: [
    CommonModule,
    ManjaRoutingModule
  ]
})
export class ManjaModule { }
