import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import * as moment from 'moment';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private service: UserService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  createForm: FormGroup;
  formValues;

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      gender: [''],
      birthDate: [moment(new Date()).format('YYYY-MM-DD')],
      created: [moment().format('YYYY-MM-DD')]
    });
  }

  onSubmit() {
    this.formValues = {
      firstName: this.createForm.value.firstName,
      lastName: this.createForm.value.lastName,
      gender: this.createForm.value.gender,
      birthDate: moment(this.createForm.value.birthDate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
      created: moment().format('YYYY-MM-DD')
    }

    this.service.createUser(this.formValues).subscribe(
      data => {
        this.openSnackBar(`User ${data['firstName']} ${data['lastName']} added`, 'Dismiss');
        this.createForm.reset();
      },
      error => console.error('Error', error)
    );
  }

  openDialog(): void {
    this.dialog.closeAll();
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action);
  }

}
