import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {

  public userId;
  user: any;

  dataSource: any;
  displayedColumns: any[] = ['firstName', 'lastName', 'birthDate', 'gender', 'created'];
  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userId = id;

    this._userService.getUser(this.userId).subscribe((data)  => {
      const arr = [];
      arr.push(data);
      this.dataSource = arr;
    });
  }

}
