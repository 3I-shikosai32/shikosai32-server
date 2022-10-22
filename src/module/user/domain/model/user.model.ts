import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';
import { CharacterStatus } from '~/character-status/domain/model/character-status.model';

export class User {
  readonly id: string;

  readonly name: string;

  readonly email: string;

  readonly role: keyof typeof Role;

  readonly authId: string;

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
    authId: string;
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
    this.authId = args.authId;
    this.totalPointDay1 = args.totalPointDay1;
    this.totalPointDay2 = args.totalPointDay2;
    this.consumablePoint = args.consumablePoint;
    this.participateGame = args.participateGame;
    this.pullableGachaTimes = args.pullableGachaTimes;
    this.createdAt = args.createdAt;
  }

  canPullGacha(characterStatus: CharacterStatus) {
    const canPullMoreGacha = this.pullableGachaTimes > 0;
    const canObtainMoreItem = !characterStatus.isItemCompleted();

    return canPullMoreGacha && canObtainMoreItem;
  }

  canExchangeGift(price: number) {
    return this.consumablePoint - price >= 0;
  }
}
