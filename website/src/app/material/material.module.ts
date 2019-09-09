import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule
]

@NgModule({
  imports: [
    MatButtonModule
  ],
  exports:[
    MatButtonModule
  ]
})
export class MaterialModule { }
