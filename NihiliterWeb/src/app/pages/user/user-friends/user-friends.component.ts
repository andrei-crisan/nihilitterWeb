import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { FriendshipService } from 'src/app/services/friendship.service';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.scss']
})
export class UserFriendsComponent implements OnInit {
  listOfFriends: Friend[] = [];

  constructor(private friendShipService: FriendshipService) { }

  ngOnInit(): void {
    this.getAllFriendsByUser();
  }

  getAllFriendsByUser() {
    this.friendShipService.getAllFriendships()
      .subscribe(x => this.listOfFriends = x);
  }

}
