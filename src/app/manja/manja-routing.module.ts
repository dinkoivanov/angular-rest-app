import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BobComponent } from './bob/bob.component';

const routes: Routes = [{
  path: '', component: BobComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManjaRoutingModule { }
