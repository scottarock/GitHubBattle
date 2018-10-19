import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Contestant } from '../../models';

@Component({
  selector: 'app-contestant',
  templateUrl: './contestant.component.html',
  styleUrls: ['./contestant.component.css']
})
export class ContestantComponent implements OnInit {

  @Input() contestant: Contestant;
  @Output() userSubmitted: EventEmitter<Contestant> = new EventEmitter;
  userName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`submitted --> ${this.contestant.userName}`);
    this.userSubmitted.emit(this.contestant);
  }

}
