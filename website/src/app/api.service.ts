import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from './user'
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addUser(user: User): Observable<User> {
    return null;
  }

  constructor(private http:Http) { }

  public getAllUsers(): Observable<User[]> {
    return this.http
      .get(API_URL + '/users')
      .map(response => {
        const users = response.json();
        return users.items.map((user) => new User(user));
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
