import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import { OtherComponent } from './other/other.component';


const appRoutes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'other', component: OtherComponent },
  { path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  ];
@NgModule({
  declarations: [
    AppComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
