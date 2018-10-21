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
  private readonly rankingsBase: string = '/api/githubusers';

  constructor(private http: HttpClient) { }

  // get user from GitHub using their user name
  getUser(userName): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${this.gitHubBase}/${userName}`);
  }

  // get contestant from rankings database
  getContestant(userName: string): Observable<Contestant> {
    console.log('getting', userName);
    return this.http.get<Contestant>(`${this.rankingsBase}/${userName}`);
  }

  createContestant(contestant: Contestant): Observable<Contestant> {
    const contestantToSave = {
      userName: contestant.userName,
      avatar_url: contestant.avatar_url,
      score: contestant.score,
    }
    console.log('saving', contestant);
    return this.http.post<Contestant>(this.rankingsBase, contestantToSave)
  }

  // retrieve all users from the rankings database
  getContestants(): Observable<Contestant[]> {
    return this.http.get<Contestant[]>(this.rankingsBase)
  }

  // rank the 2 contestants and save the rankings for other components
  determinePlaces(contestant1: Contestant, contestant2: Contestant): void {
    if ( contestant1.score > contestant2.score ) {
      this.firstPlace = contestant1;
      this.secondPlace = contestant2;
    } else {
      this.firstPlace = contestant2;
      this.secondPlace = contestant1;
    }
  }

  // get the first place contestant
  retrieveFirstPlace(): Contestant {
    return this.firstPlace;
  }

  // get the second place contestant
  retrieveSecondPlace(): Contestant {
    return this.secondPlace;
  }

}
