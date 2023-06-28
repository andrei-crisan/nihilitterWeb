import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend';
import { FriendRequest } from '../models/friendrequest';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {

  private userWebApiLink: string = "https://localhost:7230/friendship/friends";
  private userWebApiFollowers: string = "https://localhost:7230/friendship/followers";
  private userWebApiLinkPut: string = "https://localhost:7230/friendship";

  constructor(private httpClient: HttpClient) { }

  getAllFriendships(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>(this.userWebApiLink);
  }

  deleteFollowing(friendshipId: number): Observable<any> {
    const trackerItemRestUrlForDelete = `${this.userWebApiLinkPut}/${friendshipId}`;
    return this.httpClient.delete<any>(trackerItemRestUrlForDelete);
  }

  addNewFollower(friendId: number): Observable<any> {
    return this.httpClient
      .post<any>(this.userWebApiLinkPut, friendId);
  }

  getAllFollowers(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>(this.userWebApiFollowers);
  }

  confirmFriendShip(friendRequest: FriendRequest): Observable<any> {
    const trackerItemRestUrlForUpdate = `${this.userWebApiLinkPut}/${friendRequest.friendshipId}`;

    return this.httpClient.put<any>(trackerItemRestUrlForUpdate, friendRequest);
  }
}
