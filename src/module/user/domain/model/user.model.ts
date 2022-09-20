import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';
import { NestedGiftHistory } from '~/gift-history/domain/model/nested-gift-history.model';
import { NestedItem } from '~/item/domain/model/nested-item.model';

export class User {
  readonly id: string;

  readonly name: string;

  readonly email: string;

  readonly role: keyof typeof Role;

  readonly totalPointDay1: number;

  readonly totalPointDay2: number;

  readonly consumablePoint: number;

  readonly character: keyof typeof Character;

  readonly iconUrl: string;

  readonly avatarUrl: string;

  readonly items: NestedItem[];

  readonly itemIds: string[];

  readonly participateGame: keyof typeof Game;

  readonly pullableGachaTimes: number;

  readonly giftHistories: NestedGiftHistory[];

  readonly createdAt: Date;

  constructor(args: {
    id: string;
    name: string;
    email: string;
    role: keyof typeof Role;
    totalPointDay1: number;
    totalPointDay2: number;
    consumablePoint: number;
    character: keyof typeof Character;
    iconUrl: string;
    avatarUrl: string;
    items: NestedItem[];
    itemIds: string[];
    participateGame: keyof typeof Game;
    pullableGachaTimes: number;
    giftHistories: NestedGiftHistory[];
    createdAt: Date;
  }) {
    this.id = args.id;
    this.name = args.name;
    this.email = args.email;
    this.role = args.role;
    this.totalPointDay1 = args.totalPointDay1;
    this.totalPointDay2 = args.totalPointDay2;
    this.consumablePoint = args.consumablePoint;
    this.character = args.character;
    this.iconUrl = args.iconUrl;
    this.avatarUrl = args.avatarUrl;
    this.items = args.items;
    this.itemIds = args.itemIds;
    this.participateGame = args.participateGame;
    this.pullableGachaTimes = args.pullableGachaTimes;
    this.giftHistories = args.giftHistories;
    this.createdAt = args.createdAt;
  }

  canPullGacha() {
    return this.pullableGachaTimes - 1 > 0;
  }

  canExchangeGift(price: number) {
    return this.consumablePoint - price >= 0;
  }
}
