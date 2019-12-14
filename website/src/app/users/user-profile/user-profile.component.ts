import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from './../services/users.service';
import { User } from './../models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private user: object = {}
  public gender: object = {
    M: 'Male',
    F: 'Female'
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UsersService) { }

  initializeUserData(id: string) {
    this.userService.getUserById(id)
      .subscribe((data) => {
        this.user = data || {};
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.initializeUserData(id);
    })
  }

  deleteUser(userId) {
    this.userService.deleteUserById(userId)
      .subscribe(
        success => {
          this.router.navigate(['']);
        },
        error => console.log(error)
      );
    ;
  }

  goBack() {
    this.location.back(); 
  }
}
