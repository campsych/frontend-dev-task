import { Injectable } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private api: ApiService) {}

  public addUser(user: User): Observable<User> {
    return this.api.addUser(user);
  }

  public getAllUsers(): Observable<User[]> {
    return this.api.getAllUsers();
  }
}
