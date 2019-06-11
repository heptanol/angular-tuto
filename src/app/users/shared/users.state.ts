import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from './user.model';


export interface UsersState {
  users: User[];
  usersLoading: boolean;
  usersError: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersStateHelper {

  constructor(private store: Store<any>) {}

  getUsers(): Observable<User[]> {
    return this.store.select('usersStore', 'users');
  }

  getUsersLoading(): Observable<boolean> {
    return this.store.select('usersStore', 'usersLoading');
  }

  getUsersError(): Observable<Error | null> {
    return this.store.select('usersStore', 'usersError');
  }
}
