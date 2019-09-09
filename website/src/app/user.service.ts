import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly SERVER_URL = 'http://localhost:8080';
  users: any;
  user: any;
  constructor(private http: HttpClient) { }


  // getUsers() {
  //   this.users = this.http.get(this.SERVER_URL + '/users').subscribe((data) => {
  //     this.users = data['items'];
  //   });
  //   return this.users;
  // }

  getUsers() {
    return this.http.get(this.SERVER_URL + '/users');
  }

  getUser(){
    const param = 1;
    this.user = this.http.get(this.SERVER_URL + `/users/${param}`).subscribe((data)=>{    
      this.user = data['items'];
    });
  }

}
