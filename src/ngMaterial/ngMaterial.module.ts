import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  } from '@angular/material';
// import 'hammerjs';  // for gesture support in @angular/material, imported in entry point (main.ts)

@NgModule({
  imports: [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  ],
  exports: [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  ]
})
export class NgMaterialModule { }
