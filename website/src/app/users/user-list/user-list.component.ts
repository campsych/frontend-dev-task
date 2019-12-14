import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from './../services/users.service';
import {User} from './../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: User[];
  public page: number = 0;
  public size: number = 20;
  public total: number = 0;
  public totalPage: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) { }

  initializeUserData(page: number = 0) {
    this.userService.getUserList(page, this.size)
      .subscribe((data:{ items: User[], page :number, total: number, size: number}) => {
        this.users = data.items;
        this.total = data.total;
        this.totalPage = Math.round(this.total/this.size) - 1;
      });
  }

  onPrevious() {
    this.page = this.page > 0 ? this.page - 1: 0;
    this.initializeUserData();
  }
  
  onNext() {
    this.page = this.page < this.totalPage ? this.page + 1: this.page;
    this.initializeUserData();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const page = parseInt(params.get("page")) || 0;
      this.page = page;
      this.initializeUserData(page)
    })
  }

}
