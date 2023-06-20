import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';
import { NihilListComponent } from './pages/nihil/nihil-list/nihil-list.component';
import { NihilAddComponent } from './pages/nihil/nihil-add/nihil-add.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthInterceptorProvider, HttpsealInterceptor } from './httpseal.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegisterComponent,
    UserDetailsComponent,
    NihilListComponent,
    NihilAddComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
