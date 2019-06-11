import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UsersService } from '../shared/users.service';
import { User } from '../shared/user.model';
import { UserFetchAllAction } from '../shared/users.actions';
import { UsersStateHelper } from '../shared/users.state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  usersFromStore$: Observable<User[]>;

  constructor(
    private service: UsersService,
    private state: UsersStateHelper,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.usersFromStore$ = this.state.getUsers();
  }

  send() {
    this.store.dispatch(new UserFetchAllAction());
  }

}
