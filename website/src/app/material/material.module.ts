import { NgModule } from '@angular/core';
import {FlexModule} from '@angular/flex-layout';
import { 
  MatButtonModule, 
  MatTableModule, 
  MatFormFieldModule, 
  MatSelectModule, 
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatDialogModule,
  MatToolbarModule
 } from '@angular/material';

const material = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatDialogModule,
  MatToolbarModule,
  FlexModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
