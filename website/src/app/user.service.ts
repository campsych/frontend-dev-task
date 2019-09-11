import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getUsers() {// return a list of all users
    return this.http.get(`${this.SERVER_URL}/users?size=400`);
  }
  getUser(id) {// return an user with a specific id
    return this.http.get<User[]>(`${this.SERVER_URL}/users/${id}`);
  }
  createUser(user) {// add(post) a new user
    return this.http.post(`${this.SERVER_URL}/users`, user, this.httpOptions);
  }
  updateUser(user) {// update user data
    return this.http.put(`${this.SERVER_URL}/users/${user.id}`, user, this.httpOptions);
  }
  deleteUser(id: number) {// delete an user with a specific id
    return this.http.delete(`${this.SERVER_URL}/users/${id}`, this.httpOptions);
  }
}
