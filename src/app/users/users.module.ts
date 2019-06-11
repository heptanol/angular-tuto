import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { UsersState } from './shared/users.state';
import { usersStore } from './shared/users.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './shared/users.effects';

export const usersStoreToken = new InjectionToken<ActionReducerMap<UsersState>>('usersStore');

@NgModule({
  declarations: [UserListComponent],
  providers: [
    { provide: usersStoreToken, useValue: usersStore }
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('usersStore', usersStoreToken),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersModule { }
