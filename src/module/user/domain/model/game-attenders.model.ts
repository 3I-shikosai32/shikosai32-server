import { User } from './user.model';

export class GameAttenders {
  readonly xeno: User[];

  readonly coin_dropping: User[];

  readonly ice_raze: User[];

  readonly president: User[];

  readonly poker: User[];

  readonly we_didnt_playtest: User[];

  constructor(args: { xeno: User[]; coin_dropping: User[]; ice_raze: User[]; president: User[]; poker: User[]; we_didnt_playtest: User[] }) {
    this.xeno = args.xeno;
    this.coin_dropping = args.coin_dropping;
    this.ice_raze = args.ice_raze;
    this.president = args.president;
    this.poker = args.poker;
    this.we_didnt_playtest = args.we_didnt_playtest;
  }
}
