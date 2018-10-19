import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GitHubUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  private readonly gitHubBase: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(userName): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${this.gitHubBase}/${userName}`);
  }

}
