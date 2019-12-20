import { Component, ViewEncapsulation } from '@angular/core';
import moment from 'moment/src/moment';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddUserComponent {
  private user = {
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: ''
  };
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private userService: UsersService) { }

  isValidName(name: string) {
    return (name.match(/^[a-z\s]{1,255}$/i));
  }

  addUser() {
    const {
      firstName,
      lastName,
      gender,
      birthDate
    } = this.user;
    if (!this.isValidName(firstName)) {
      this.errorMessage = 'Please enter valid first name';
    } else if (!this.isValidName(lastName)) {
      this.errorMessage = 'Please enter valid last name';
    } else if (!moment(birthDate).isValid()) {
      this.errorMessage = 'Please select valid date of birth';
    } else if (!gender) {
      this.errorMessage = 'Please select gender';
    } else {
      const userPayload = {
        ...this.user,
        birthDate: moment(this.user.birthDate).format('YYYY-MM-DD'),
        created: moment().format('YYYY-MM-DD')
      };
      this.userService.addUser(userPayload)
        .subscribe(
          (res: { id: string }) => {
            this.router.navigate(['/user', res.id]);
          },
          error => console.log(error)
        );
    }
  }
}
