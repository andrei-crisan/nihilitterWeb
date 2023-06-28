import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FriendshipService } from 'src/app/services/friendship.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersList: User[] = [];
  searchText: any;
  filteredUsers: User[] = [];

  constructor(private usersService: UserService, private friendshipService: FriendshipService) { }

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    this.usersService.getAllUsers()
      .subscribe(x => this.usersList = x);
  }

  addFollower(userId: number) {
    this.friendshipService.addNewFollower(userId)
      .subscribe(_ => {
        alert("New friend!");
        location.reload();
      });
  }

}
