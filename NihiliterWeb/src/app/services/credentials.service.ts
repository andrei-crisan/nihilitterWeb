import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private nihilCredentialsWebApiLogin: string = "https://localhost:7230/users/login";
  private nihilCredentialsWebApiRegister: string = "https://localhost:7230/users/register";

  constructor(private httpClient: HttpClient) { }

  getLoggedIn(credentials: any): Observable<any> {
    return this.httpClient
      .post<any>(this.nihilCredentialsWebApiLogin, credentials);
  }

  getRegistered(credentials: any): Observable<any> {
    return this.httpClient
      .post<any>(this.nihilCredentialsWebApiRegister, credentials);
  }
}
