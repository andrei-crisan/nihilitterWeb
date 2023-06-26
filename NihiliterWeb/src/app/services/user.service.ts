import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userWebApiLink: string = "https://localhost:7230/friendship/friends";

  constructor(private httpClient: HttpClient) { }

  getAllFriendships(): Observable<User> {
    return this.httpClient.get<User>(this.userWebApiLink);
  }
}
