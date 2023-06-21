import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { NihilListComponent } from './pages/nihil/nihil-list/nihil-list.component';
import { NihilAddComponent } from './pages/nihil/nihil-add/nihil-add.component';
import { NihilOwnpostsComponent } from './pages/nihil/nihil-ownposts/nihil-ownposts.component';

const routes: Routes = [
  {
    path: 'login', component: UserLoginComponent
  },
  {
    path: 'register', component: UserRegisterComponent,
  },
  {
    path: 'nihileets', component: NihilListComponent,
  },
  {
    path: 'post', component: NihilAddComponent,
  },
  {
    path: 'profile', component: NihilOwnpostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
