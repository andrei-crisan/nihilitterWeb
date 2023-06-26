import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {

  private userWebApiLink: string = "https://localhost:7230/friendship/friends";

  constructor(private httpClient: HttpClient) { }

  getAllFriendships(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>(this.userWebApiLink);
  }
}
