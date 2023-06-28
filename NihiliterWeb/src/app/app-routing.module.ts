import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { NihilListComponent } from './pages/nihil/nihil-list/nihil-list.component';
import { NihilAddComponent } from './pages/nihil/nihil-add/nihil-add.component';
import { NihilOwnpostsComponent } from './pages/nihil/nihil-ownposts/nihil-ownposts.component';
import { UserFriendsComponent } from './pages/user/user-friends/user-friends.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { guardianGuard } from './guardian.guard';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path: 'login', component: UserLoginComponent
  },
  {
    path: 'register', component: UserRegisterComponent,
  },
  {
    path: 'nihileets', component: NihilListComponent,
    canActivate: [guardianGuard],
  },

  {
    path: 'post', component: NihilAddComponent,
    canActivate: [guardianGuard],
  },
  {
    path: 'profile', component: NihilOwnpostsComponent,
    canActivate: [guardianGuard],
  },
  {
    path: 'friends', component: UserFriendsComponent,
    canActivate: [guardianGuard],
  },
  {
    path: 'users', component: UserListComponent,
    canActivate: [guardianGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
