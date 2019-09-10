import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  public userId;
  SERVER_URL = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  dataSource: any;
  
  constructor(private _userService: UserService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userId = id;

    this._userService.getUser(this.userId).subscribe((data) => {
      const arr = [];
      arr.push(data);
      this.dataSource = arr;
    });
  }

  delete(id: number): void {
    this._userService.deleteUser(id).subscribe();
  }
  update() {
    //this._userService.updateUser(this.userId);
  }
}
