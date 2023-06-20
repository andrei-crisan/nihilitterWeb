import { Injectable } from '@angular/core';
import { Nihil } from '../models/nihil';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

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

  submitNihilPost(formGroup: FormGroup): Observable<Nihil> {

    //Todo: temporary object
    let nihilToPost: { post: string, postDate: Date, userId: number } =
    {
      post: formGroup.get('nihil')?.value,
      postDate: new Date(),
      userId: 1
    };
    console.log(nihilToPost);
    return this.httpClient.post<Nihil>(this.nihilWebApiLink, nihilToPost);
  }

}
