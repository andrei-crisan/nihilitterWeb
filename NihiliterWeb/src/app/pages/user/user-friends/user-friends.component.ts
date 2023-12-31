import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Friend } from 'src/app/models/friend';
import { FriendRequest } from 'src/app/models/friendrequest';
import { User } from 'src/app/models/user';
import { FriendshipService } from 'src/app/services/friendship.service';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.scss']
})
export class UserFriendsComponent implements OnInit {
  // listOfFollowers: Friend[] = [];
  listOfFollowers = new MatTableDataSource<User>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'country', 'actions'];
  displayedColumnsFollowers: string[] = ['firstName', 'lastName', 'email', 'country'];
  listofFriends = new MatTableDataSource<User>;
  toggleList: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private friendShipService: FriendshipService) { }

  ngOnInit(): void {
    this.getAllFriendsByUser();
    this.getFollowers();
  }

  ngAfterViewInit(): void {
    this.listofFriends.paginator = this.paginator;
    this.listOfFollowers.paginator = this.paginator;
  }
  getAllFriendsByUser() {
    this.friendShipService.getAllFriendships()
      .subscribe(x => this.listofFriends.data = x);
  }

  removeFollowing(friendshipId: number) {
    if (confirm("Are you sure?")) {
      this.friendShipService.deleteFollowing(friendshipId)
        .subscribe(_ => {
          alert("Nihilist banished!")
          location.reload();
        });
    }
  }

  getFollowers() {
    this.friendShipService.getAllFollowers()
      .subscribe(x => this.listOfFollowers.data = x);
  }



  acceptFriendShip2(friendshipId: number, userId: number) {
    let friendRequest: FriendRequest = { friendshipId, userId };

    this.friendShipService.confirmFriendShip(friendRequest)
      .subscribe(_ => console.log("Friendship Confirmed!"));
  }

  toggleMenu() {
    this.toggleList = this.toggleList == false ? true : false;
    console.log(this.toggleList);
  }
}
