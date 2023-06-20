import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';
import { NihilListComponent } from './pages/nihil/nihil-list/nihil-list.component';
import { NihilAddComponent } from './pages/nihil/nihil-add/nihil-add.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegisterComponent,
    UserDetailsComponent,
    NihilListComponent,
    NihilAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
