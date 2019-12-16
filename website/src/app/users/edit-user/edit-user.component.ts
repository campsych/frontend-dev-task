import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  private user: Object = {id: ''}
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

  onSubmit(id) {
    const userPayload = this.user;
    this.userService.updateUserById(id, userPayload)
      .subscribe(
        success => this.router.navigate(['user', id]),
        error => console.log(error)
      )
  }

  goBack() {
    this.location.back(); 
  }


}
