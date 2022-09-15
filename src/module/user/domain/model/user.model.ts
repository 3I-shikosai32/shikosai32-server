import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';
import { NestedGiftHistory } from '~/gift-history/domain/model/nested-gift-history.model';
import { NestedItem } from '~/item/domain/model/nested-item.model';

export class User {
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
}
