import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  constructor(private _userService: UserService, private router: Router) { }
  dataSource: any;
  displayedColumns: any[] = ['firstName', 'lastName', 'birthDate', 'gender', 'created'];

  ngOnInit() {
    this._userService.getUsers().subscribe((data) => {
      this.dataSource = data['items'];
    });
  }

  userDetail(row) {// when the user clicks on one of the rows, redirect them to a new page (user-detail page)
    this.router.navigate(['/user', row.id]);
  }
}
