import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatSidenavModule,
  } from '@angular/material';
// import 'hammerjs';  // for gesture support in @angular/material, imported in entry point (main.ts)

@NgModule({
  imports: [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatSidenavModule,
  ],
  exports: [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatSidenavModule,
  ]
})
export class NgMaterialModule { }
