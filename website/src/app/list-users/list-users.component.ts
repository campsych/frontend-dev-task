import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public newUser: any;
  constructor(private _userService: UserService) { }

  users: any;
  dataSource: any;
  displayedColumns: any[] = ['firstName', 'lastName', 'birthDate', 'gender', 'created'];

  ngOnInit() {
    this.users = this._userService.getUsers().subscribe((data) => {
      this.users = data['items'];
      this.dataSource = data['items'];
    });
  }
}
