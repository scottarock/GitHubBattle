import { Component, OnInit } from '@angular/core';

import { Contestant } from '../../models';
import { BattleService } from '../../services';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  contestants: Contestant[] = [];

  constructor(private battleService: BattleService) { }

  ngOnInit() {
    this.battleService.getContestants()
      .subscribe( contestants => {
        this.contestants = contestants;
    });
  }

}
