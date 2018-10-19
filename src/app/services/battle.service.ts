import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GitHubUser } from '../models';
import { Contestant } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  firstPlace: Contestant;
  secondPlace: Contestant;

  private readonly gitHubBase: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(userName): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${this.gitHubBase}/${userName}`);
  }

  determinePlaces(contestant1: Contestant, contestant2: Contestant): void {
    if ( contestant1.score > contestant2.score ) {
      this.firstPlace = contestant1;
      this.secondPlace = contestant2;
    } else {
      this.firstPlace = contestant2;
      this.secondPlace = contestant1;
    }
  }

  retrieveFirstPlace(): Contestant {
    return this.firstPlace;
  }

  retrieveSecondPlace(): Contestant {
    return this.secondPlace;
  }

}
