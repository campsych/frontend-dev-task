import { Component, EventEmitter, Input, Output } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor() { }

  ngOnInit() {
  }

  @Input() 
  users: User[];

  @Output()
  remove: EventEmitter<User> = new EventEmitter();

  onRemoveUser(user: User) {
    this.remove.emit(user);
  }
}
