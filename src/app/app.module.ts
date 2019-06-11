import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { ItemsService } from './shared';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { ItemsSearchComponent } from './items/items-search/items-search.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { Item2Component } from './item2/item2.component';
import { Item2DetailComponent } from './item2-detail/item2-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailsComponent,
    ItemsSearchComponent,
    NewsletterComponent,
    Item2Component,
    Item2DetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
