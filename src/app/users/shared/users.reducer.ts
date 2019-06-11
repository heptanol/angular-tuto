import { ActionReducer, combineReducers } from '@ngrx/store';
import { User } from './user.model';
import { USERS_FETCH_ALL, USERS_FETCH_ALL_ERROR, USERS_FETCH_ALL_SUCCESS } from './users.actions';

const usersReducer: ActionReducer<User[]> = (state: User[] = null, action: any) => {
  switch (action.type) {
    case USERS_FETCH_ALL_SUCCESS:
      return [...action.payload];
    case USERS_FETCH_ALL_ERROR:
      return [];
    default:
      return state;
  }
};

const usersLoadingReducer: ActionReducer<boolean> = (state: boolean = false, action: any) => {
  switch (action.type) {
    case USERS_FETCH_ALL_SUCCESS:
    case USERS_FETCH_ALL_ERROR:
      return false;
    case USERS_FETCH_ALL:
      return true;
    default:
      return state;
  }
};

const usersErrorReducer: ActionReducer<boolean> = (state: boolean = false, action: any) => {
  switch (action.type) {
    case USERS_FETCH_ALL_SUCCESS:
      return false;
    case USERS_FETCH_ALL_ERROR:
      return true;
    default:
      return state;
  }
};

export const usersStore = combineReducers({
  users: usersReducer,
  usersLoading: usersLoadingReducer,
  usersError: usersErrorReducer,
});
