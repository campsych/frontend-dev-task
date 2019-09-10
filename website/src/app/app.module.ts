import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";  
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {UserServiceService} from './user-service.service';
import { UseritemComponent } from './useritem/useritem.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UseritemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
