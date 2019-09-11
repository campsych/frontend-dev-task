import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserServiceService]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe(
        (users) => {
          this.users = users;
        }
      );
  }
  users: User[] = [];
  newUser: User = new User();

  constructor(private userService:UserServiceService) {
  }

  onAddUser() {
    this.newUser.id="333";
    this.newUser.created=new Date();
    this.users.push(this.newUser);
    this.userService.addUser(this.newUser);
  }

  onRemoveUser(user) {
    this.userService
      .deleteUserById(user.id)
      .subscribe(
        (_) => {
          this.users = this.users.filter((t) => t.id !== user.id);
        }
      );
  }
}
