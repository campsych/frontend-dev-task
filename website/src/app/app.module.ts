import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserListItemComponent } from './users/components/user-list-item/user-list-item.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    UserProfileComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
