import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  userId;
  form: FormGroup;
  user;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userId = id;

    this.form = this.formBuilder.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      gender: [''],
      birthDate: ['']
    });

    this.userService.getUser(this.userId).subscribe((data) => {
      this.user = data;
      this.form.patchValue({
        id: data['id'],
        firstName: data['firstName'],
        lastName: data['lastName'],
        gender: data['gender'],
        birthDate: data['birthDate']
      });
    });
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => this.router.navigate(['/']),
      err => console.log(err)
    );
  }
  updateUser() {
    this.mapValues();
    this.userService.updateUser(this.user).subscribe(
      () => this.router.navigate(['/']),
      err => console.log(err)
    );
  }

  mapValues() {
    this.user.id = this.form.value.id;
    this.user.firstName = this.form.value.firstName;
    this.user.lastName = this.form.value.lastName;
    this.user.birthDate = this.form.value.birthDate;
    this.user.gender = this.form.value.gender;
  }
}
