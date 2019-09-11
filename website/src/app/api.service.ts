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
  public addUser(user: User): Observable<User> {
    return this.http
    .post(API_URL + '/users', user)
    .map(response => {
      return new User(response.json());
    })
    .catch(this.handleError);
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

  public createUser(user: User): Observable<User> {
    return this.http
      .post(API_URL + '/users', user)
      .map(response => {
        return new User(response.json());
      })
      .catch(this.handleError);
  }

  public getUserById(userId: number): Observable<User> {
    return this.http
      .get(API_URL + '/users/' + userId)
      .map(response => {
        return new User(response.json());
      })
      .catch(this.handleError);
  }

  public updateUser(user:User): Observable<User> {
    return this.http
      .put(API_URL + '/users/' + user.id, user)
      .map(response => {
        return new User(response.json());
      })
      .catch(this.handleError);
  }

  public deleteUserById(userId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/users/' + userId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
