import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle/battle.component';

import { AppRoutingModule } from './app-router.module';
import { ContestantComponent } from './battle/contestant/contestant.component';
import { ResultsComponent } from './battle/results/results.component';
import { RankingsComponent } from './battle/rankings/rankings.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    ContestantComponent,
    ResultsComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
