import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { UsersService } from '../shared/users.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  unsubscribe$ = new Subject<void>();

  constructor(
    private service: UsersService
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    timer(0, 10000).pipe(
      takeUntil(this.unsubscribe$),
      switchMap(() => this.service.fetchUsers())
    ).subscribe((users: User[]) => this.users = users);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
