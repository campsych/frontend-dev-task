import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any;
  SERVER_URL = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  messageService: any;

  constructor(private http: HttpClient) { }

  getUsers() {// return a list of all users
    return this.http.get(this.SERVER_URL + '/users');
  }
  getUser(id) {// return an user with a specific id
    return this.http.get(this.SERVER_URL + `/users/${id}`);
  }
  createUser(user: User) {// add(post) a new user
    return this.http.post<any>(this.SERVER_URL + '/users', user, this.httpOptions);
  }
  updateUser(user: User) {// update user data
    return this.http.put(this.SERVER_URL + '/users', user, this.httpOptions);
  }
  deleteUser(id: number) {// delete an user with a specific id
    return this.http.delete(this.SERVER_URL + `/users/${id}`);
  }
}