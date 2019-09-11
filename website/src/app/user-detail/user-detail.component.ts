import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  userId;
  updateForm: FormGroup;
  user;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userId = id;

    this.updateForm = this.formBuilder.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      gender: [''],
      birthDate: ['']
    });

    this.userService.getUser(this.userId).subscribe((data) => {
      this.user = data;
      this.updateForm.patchValue({
        id: data['id'],
        firstName: data['firstName'],
        lastName: data['lastName'],
        gender: data['gender'],
        birthDate: moment(data['birthDate'], 'YYYY-MM-DD').format('YYYY-MM-DD')
      });
    });
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => this.router.navigate(['/']),
      err => console.log(err)
    );
    this.openSnackBar(`User removed!`, 'Dismiss');
  }
  updateUser() {
    this.mapValues();
    this.userService.updateUser(this.user).subscribe(
      () => this.openSnackBar(`User updated!`, 'Dismiss'),
      err => console.log(err)
    );
  }

  mapValues() {
    this.user.id = this.updateForm.value.id;
    this.user.firstName = this.updateForm.value.firstName;
    this.user.lastName = this.updateForm.value.lastName;
    this.user.birthDate = moment(this.updateForm.value.birthDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
    this.user.gender = this.updateForm.value.gender;
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action);
  }
}
