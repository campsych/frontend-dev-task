import { Component, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.scss']
})
export class UseritemComponent {

  @Input() user: User;

  @Output()
  remove: EventEmitter<User> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
