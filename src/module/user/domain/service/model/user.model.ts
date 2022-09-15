import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';
import { NestedGiftHistoryInterface } from '~/gift-history/domain/service/model/nested-gift-history.model';
import { NestedItemInterface } from '~/item/domain/service/model/nested-item.model';

export interface UserInterface {
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
  readonly items: NestedItemInterface[];
  readonly itemIds: string[];
  readonly participateGame: keyof typeof Game;
  readonly pullableGachaTimes: number;
  readonly giftHistories: NestedGiftHistoryInterface[];
  readonly createdAt: Date;
}
