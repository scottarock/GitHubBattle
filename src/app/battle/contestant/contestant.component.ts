import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Contestant } from '../../models';

@Component({
  selector: 'app-contestant',
  templateUrl: './contestant.component.html',
  styleUrls: ['./contestant.component.css']
})
export class ContestantComponent implements OnInit {

  // battle component does all the work
  @Input() contestant: Contestant;
  @Output() userSubmitted: EventEmitter<Contestant> = new EventEmitter;
  userName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.userSubmitted.emit(this.contestant);
  }

}
