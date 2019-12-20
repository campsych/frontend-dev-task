import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import moment from 'moment/src/moment'
import { UsersService } from './../services/users.service';
import { User } from './../models/User'

const userOb: User = {
  id: 0,
  firstName: '',
  lastName: '',
  gender: '',
  birthDate: '',
  created: ''
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EditUserComponent implements OnInit {
  private user: User = userOb;
  public gender: object = {
    M: 'Male',
    F: 'Female'
  }
  public errorMessage : string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UsersService) { }

    initializeUserData(id: string) {
      this.userService.getUserById(id)
        .subscribe((data: User) => {
          this.user = data || userOb;
        });
    }

  ngOnInit() {
    this.user = userOb;
    this.errorMessage = ''
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.initializeUserData(id);
    })
  }

  onSubmit(id) {
    const {
      firstName,
      lastName,
      gender,
      birthDate
    } = this.user
    if (!this.isValidName(firstName)) {
      this.errorMessage = 'Please enter valid first name'
    } else if (!this.isValidName(lastName)) {
      this.errorMessage = 'Please enter valid last name'
    } else if (!moment(birthDate).isValid()) {
      this.errorMessage = 'Please select valid date of birth'
    } else if (!gender) {
      this.errorMessage = 'Please select gender'
    } else {
      const userPayload = {
        ...this.user,
        birthDate: moment(this.user.birthDate).format('YYYY-MM-DD')
      };

      this.userService.updateUserById(id, userPayload)
        .subscribe(
          success => this.router.navigate(['user', id]),
          error => console.log(error)
        )
      }
  }

  goBack() {
    this.location.back(); 
  }

  isValidName(name) {
    return (name.match(/^[a-z\s]{1,255}$/i))
  }

}
