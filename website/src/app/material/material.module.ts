import { NgModule } from '@angular/core';
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
 } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatDialogModule,
]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
