import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { FriendRequest } from 'src/app/models/friendrequest';
import { FriendshipService } from 'src/app/services/friendship.service';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.scss']
})
export class UserFriendsComponent implements OnInit {
  listOfFriends: Friend[] = [];
  listOfFollowers: Friend[] = [];

  constructor(private friendShipService: FriendshipService) { }

  ngOnInit(): void {
    this.getAllFriendsByUser();
    this.getFollowers();
  }

  getAllFriendsByUser() {
    this.friendShipService.getAllFriendships()
      .subscribe(x => this.listOfFriends = x);
  }

  removeFollowing(friendshipId: number) {
    if(confirm("Are you sure?")){
    this.friendShipService.deleteFollowing(friendshipId)
      .subscribe(_ => console.log("friendship removed"));
    }
  }

  getFollowers() {
    this.friendShipService.getAllFollowers()
      .subscribe(x => this.listOfFollowers = x);
  }



  acceptFriendShip2(friendshipId: number, userId: number) {
    let friendRequest: FriendRequest = { friendshipId, userId };

    this.friendShipService.confirmFriendShip(friendRequest)
      .subscribe(_ => console.log("Friendship Confirmed!"));
  }
}
