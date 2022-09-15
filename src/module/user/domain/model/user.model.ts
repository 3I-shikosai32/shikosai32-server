import { Injectable } from '@nestjs/common';
import { UserInterface } from '../service/model/user.model';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';
import { NestedGiftHistoryInterface } from '~/gift-history/domain/service/model/nested-gift-history.model';
import { NestedItemInterface } from '~/item/domain/service/model/nested-item.model';

@Injectable()
export class User implements UserInterface {
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

  items: NestedItemInterface[];

  itemIds: string[];

  participateGame: keyof typeof Game;

  pullableGachaTimes: number;

  giftHistories: NestedGiftHistoryInterface[];

  createdAt: Date;
}
