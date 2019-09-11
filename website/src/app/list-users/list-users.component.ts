import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  constructor(private _userService: UserService, private router: Router, public dialog: MatDialog) { }
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

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '640px', disableClose: true
    });
  }
}
