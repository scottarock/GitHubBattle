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
    this.battleService.getUser(contestant.userName)
      .subscribe(
        ghUser => { // succesful return
          contestant.avatar_url = ghUser.avatar_url;
          contestant.score = (ghUser.public_repos + ghUser.followers) * 12;
          contestant.ready = true;
          this.setReadyToBattle();
        },
        error => { // error occurred retrieving user from GitHub
          console.log('ERROR CAUGHT', error);
          if ( error.status === 404 ) {
            console.log('404 Not Found error')
            contestant.error = 'GitHub username does not exist, please try again';
          }
        }
      );
  }

  showResults() {
    this.battleService.determinePlaces(this.contestant1, this.contestant2);
    this.router.navigateByUrl('/results');
  }

  private setReadyToBattle() {
    this.readyToBattle = this.contestant1.ready && this.contestant2.ready;
  }
}
