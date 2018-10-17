import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BattleComponent } from './battle/battle/battle.component';
import { ResultsComponent } from './battle/results/results.component';
import { RankingsComponent } from './battle/rankings/rankings.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BattleComponent,
  },
  {
    path: 'results',
    pathMatch: 'full',
    component: ResultsComponent,
  },
  {
    path: 'rankings',
    pathMatch: 'full',
    component: RankingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
