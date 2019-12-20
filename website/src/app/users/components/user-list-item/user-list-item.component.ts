import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../models/User'

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  @Input() user: User;
  public gender: object = {
    M: 'Male',
    F: 'Female'
  }
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showUserProfile() {
    this.router.navigate(['/user', this.user.id]);
  }
}
