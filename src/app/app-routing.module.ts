import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { Item2Component } from './item2/item2.component';
import { Item2DetailComponent } from './item2-detail/item2-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'items2', component: Item2Component},
  {path: 'items2/:id', component: Item2DetailComponent},
  {path: 'widgets', component: WidgetsComponent},
  {path: 'manja', loadChildren: './manja/manja.module#ManjaModule'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
