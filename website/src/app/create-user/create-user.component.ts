import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userModel = new User(moment().format('YYYY-MM-DD'), '', '', '', moment().format('YYYY-MM-DD'));

  constructor(private _userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit() {
    this._userService.createUser(this.userModel).subscribe(
      data => console.log("Success", data),
      error => console.error("Error", error)
    );
  }


  openDialog(): void {
    this.dialog.closeAll();
  }

}
