import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  constructor(private service: UserService, private router: Router, public dialog: MatDialog) { }
  dataSource: any;
  displayedColumns: any[] = ['firstName', 'lastName', 'birthDate', 'gender', 'created', 'actions'];
  resultsLength = 0;
  perPage = 20;
  listData: MatTableDataSource<any>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit() {
    this.service.getUsers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data['items']);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.resultsLength = data['size'];
      this.perPage = data['size']
    });

  }

  userDetail(row) {// when the user clicks on one of the rows, redirect them to a new page (user-detail page)
    this.router.navigate(['/user', row.id]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '640px'
    });
  }
}
