import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatTableModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
