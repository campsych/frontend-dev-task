import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatTableModule, 
  MatFormFieldModule, 
  MatSelectModule, 
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
 } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
