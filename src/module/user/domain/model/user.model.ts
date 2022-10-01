import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';

export class User {
  readonly id: string;

  readonly name: string;

  readonly email: string;

  readonly role: keyof typeof Role;

  readonly totalPointDay1: number;

  readonly totalPointDay2: number;

  readonly consumablePoint: number;

  readonly participateGame: keyof typeof Game;

  readonly pullableGachaTimes: number;

  readonly createdAt: Date;

  constructor(args: {
    id: string;
    name: string;
    email: string;
    role: keyof typeof Role;
    totalPointDay1: number;
    totalPointDay2: number;
    consumablePoint: number;
    participateGame: keyof typeof Game;
    pullableGachaTimes: number;
    createdAt: Date;
  }) {
    this.id = args.id;
    this.name = args.name;
    this.email = args.email;
    this.role = args.role;
    this.totalPointDay1 = args.totalPointDay1;
    this.totalPointDay2 = args.totalPointDay2;
    this.consumablePoint = args.consumablePoint;
    this.participateGame = args.participateGame;
    this.pullableGachaTimes = args.pullableGachaTimes;
    this.createdAt = args.createdAt;
  }

  canPullGacha() {
    return this.pullableGachaTimes - 1 > 0;
  }

  canExchangeGift(price: number) {
    return this.consumablePoint - price >= 0;
  }
}
