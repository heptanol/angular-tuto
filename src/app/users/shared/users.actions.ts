import { Action } from '@ngrx/store';
import { User } from './user.model';

export const USERS_FETCH_ALL = '[USERS] FETCH ALL';
export const USERS_FETCH_ALL_SUCCESS = '[USERS] FETCH ALL SUCCESS';
export const USERS_FETCH_ALL_ERROR = '[USERS] FETCH ALL ERROR';

export class UserFetchAllAction implements Action {
  type = USERS_FETCH_ALL;
  constructor(public payload: null = null) {}
}

export class UserFetchAllSuccessAction implements Action {
  type = USERS_FETCH_ALL_SUCCESS;
  constructor(public payload: User[]) {}
}

export class UserFetchAllErrorAction implements Action {
  type = USERS_FETCH_ALL_ERROR;
  constructor(public payload: Error) {}
}

export type UsersActions = UserFetchAllAction | UserFetchAllSuccessAction | UserFetchAllErrorAction;

