import { Injectable } from '@angular/core';
import { Nihil } from '../models/nihil';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NihilService {
  private nihilWebApiLink: string = "https://localhost:7230/Nihil";

  constructor(private httpClient: HttpClient) { }

  getAllNihils(): Observable<Nihil[]> {
    return this.httpClient
      .get<Nihil[]>(this.nihilWebApiLink);
  }

}
