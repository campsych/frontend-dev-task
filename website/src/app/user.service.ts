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
      'Content-Type':  'application/json'
    })
  };

  users: any;
  newUser: any;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.SERVER_URL + '/users');
  }
  create(user: User){
    return this.http.post<any>(this.SERVER_URL + '/users', user, this.httpOptions);
  }
}
