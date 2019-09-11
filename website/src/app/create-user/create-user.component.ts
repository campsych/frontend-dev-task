import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import * as moment from 'moment';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit {
  @ViewChild('f', { static:true}) ngForm;
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
      birthDate: [moment(new Date()).format('YYYY-MM-DD')],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      created: [moment().format('YYYY-MM-DD')]
    });
  }

  onSubmit() {
    this.formValues = {
      birthDate: moment(this.createForm.value.birthDate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
      firstName: this.createForm.value.firstName,
      lastName: this.createForm.value.lastName,
      gender: this.createForm.value.gender,
      created: moment().format('YYYY-MM-DD')
    }

    console.log(this.formValues);

    this.service.createUser(this.formValues).subscribe(
      data => {
        this.openSnackBar(`User ${data['firstName']} ${data['lastName']} added`, 'Dismiss');
        this.ngForm.resetForm();
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
