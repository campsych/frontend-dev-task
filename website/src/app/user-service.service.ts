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

  public deleteUserById(userId: number): Observable<User> {
    return this.api.deleteUserById(userId);
  }

  public updateUser(user: User): Observable<User> {
    return this.api.updateUser(user);
  }

  public getUserById(userId: number): Observable<User> {
    return this.api.getUserById(userId);
  }

  public getAllUsers(): Observable<User[]> {
    return this.api.getAllUsers();
  }

}
