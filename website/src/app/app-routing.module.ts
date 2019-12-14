import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component'
import { UserProfileComponent } from './users/user-profile/user-profile.component'
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':page', component: UserListComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'edit-user/:id', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
