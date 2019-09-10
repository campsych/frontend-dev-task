import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component'
import { ListUsersComponent } from './list-users/list-users.component';


const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [UserDetailComponent, ListUsersComponent];