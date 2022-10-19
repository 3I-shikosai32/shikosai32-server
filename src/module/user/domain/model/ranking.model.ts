import { User } from './user.model';

export class Ranking {
  readonly user: User;

  readonly point: number;

  constructor(args: { user: User; point: number }) {
    this.user = args.user;
    this.point = args.point;
  }
}
