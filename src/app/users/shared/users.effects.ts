import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserFetchAllErrorAction, UserFetchAllSuccessAction, USERS_FETCH_ALL } from './users.actions';
import { UsersService } from './users.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersEffects {

  @Effect()
  fetchClients$ = this.actions$.pipe(
    ofType(USERS_FETCH_ALL),
    switchMap(() => this.service.fetchUsers()
      .pipe(
        map((users: User[]) => new UserFetchAllSuccessAction(users)),
        catchError((error: Error) => of(new UserFetchAllErrorAction(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: UsersService,
  ) { }
}
