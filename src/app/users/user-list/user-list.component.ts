import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UsersService } from '../shared/users.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(
    private service: UsersService
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    timer(0, 10000).pipe(
      switchMap(() => this.service.fetchUsers())
    ).subscribe((users: User[]) => this.users = users);
  }
}
