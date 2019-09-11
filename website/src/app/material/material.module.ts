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
  MatToolbarModule,
  MatIconModule,
  MatRadioModule,
  MatPaginatorModule,
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
  FlexModule,
  MatIconModule,
  MatRadioModule,
  MatPaginatorModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
