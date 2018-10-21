import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contestant } from '../../models';
import { BattleService } from '../../services/battle.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  firstPlace: Contestant;
  secondPlace: Contestant;

  constructor(
    private battleService: BattleService,
    private router: Router
  ) { }

  ngOnInit() {
    // get the contestants
    this.firstPlace = this.battleService.retrieveFirstPlace();
    this.secondPlace = this.battleService.retrieveSecondPlace();
  }

  reset() {
    this.router.navigateByUrl('/');
  }

}
