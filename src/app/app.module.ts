import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ParentComponent } from './test/parent/parent.component';
import { AwesomeComponent } from './test/awesome/awesome.component';
import {FormsModule} from '@angular/forms';
import { GreatComponent } from './test/great/great.component';
import { AnotherParentComponent } from './test/another-parent/another-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    AwesomeComponent,
    GreatComponent,
    AnotherParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
