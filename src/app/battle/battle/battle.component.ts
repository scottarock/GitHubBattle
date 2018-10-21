import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contestant } from '../../models';
import { BattleService } from '../../services';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  contestant1: Contestant = new Contestant('1');
  contestant2: Contestant = new Contestant('2');
  readyToBattle: boolean = false;

  constructor(
    private battleService: BattleService,
    private router: Router
  ) { }

  ngOnInit() { }

  getUser(contestant: Contestant) {
    // retrieve GitHub user data from GitHub
    this.battleService.getUser(contestant.userName)
      .subscribe(
        ghUser => { // succesful return
          contestant.avatar_url = ghUser.avatar_url;
          contestant.score = (ghUser.public_repos + ghUser.followers) * 12;
          contestant.ready = true;
          this.setReadyToBattle();
        },
        error => { // error occurred retrieving user from GitHub
          if ( error.status === 404 ) {
            console.log('404 Not Found error')
            contestant.error = 'GitHub username does not exist, please try again';
          }
        }
    );
  }

  showResults() {
    // send the contestants to the service to set placings
    this.battleService.determinePlaces(this.contestant1, this.contestant2);
    // save the contestants to the rankings database
    this.battleService.getContestant(this.contestant1.userName)
      .subscribe(
        ghUser => {
          if (!ghUser) {
            this.battleService.createContestant(this.contestant1)
            .subscribe( _contestant => {});
          }
        },
    );
    this.battleService.getContestant(this.contestant2.userName)
      .subscribe(
        ghUser => {
          if (!ghUser) {
            this.battleService.createContestant(this.contestant2)
              .subscribe( _contestant => {});
          }
        },
    );
    // show the results of this battle
    this.router.navigateByUrl('/results');
  }

  private setReadyToBattle() {
    this.readyToBattle = this.contestant1.ready && this.contestant2.ready;
  }
}
