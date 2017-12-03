import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgMaterialModule } from '../ngMaterial/ngMaterial.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
