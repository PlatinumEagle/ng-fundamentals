import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgMaterialModule } from '../ngMaterial/ngMaterial.module';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
