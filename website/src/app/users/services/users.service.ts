import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../models/User';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUserList(page: number = 0, size: number = 20) {
    const userUrl = `${BASE_URL}users`;
    return this.http.get(`${userUrl}?size=${size}&page=${page}`);
  }

  getUserById(userId: string) {
    const userUrl = `${BASE_URL}users/${userId}`;
    return this.http.get(`${userUrl}`);
  }

  deleteUserById(userId: string) {
    const userUrl = `${BASE_URL}users/${userId}`;
    return this.http.delete(`${userUrl}`);
  }

  updateUserById(userId: string, user) {
    const userUrl = `${BASE_URL}users/${userId}`;
    return this.http.put(`${userUrl}`, user);
  }

  addUser(user) {
    const userUrl = `${BASE_URL}users`;
    return this.http.post(`${userUrl}`, user);
  }

}
