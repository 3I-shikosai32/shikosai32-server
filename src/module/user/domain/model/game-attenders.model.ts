import { User } from './user.model';

export class GameAttenders {
  readonly xeno: User[];

  readonly coinDropping: User[];

  readonly iceRaze: User[];

  readonly president: User[];

  readonly poker: User[];

  readonly weDidntPlaytest: User[];

  constructor(args: { xeno: User[]; coinDropping: User[]; iceRaze: User[]; president: User[]; poker: User[]; weDidntPlaytest: User[] }) {
    this.xeno = args.xeno;
    this.coinDropping = args.coinDropping;
    this.iceRaze = args.iceRaze;
    this.president = args.president;
    this.poker = args.poker;
    this.weDidntPlaytest = args.weDidntPlaytest;
  }
}
