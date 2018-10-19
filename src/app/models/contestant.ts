export class Contestant {

  number: string;
  userName: string;
  avatar_url: string;
  score: number;
  ready: boolean;
  error: string;

  constructor(number: string) {
    this.number = number;
    this.userName = '';
  }
}
