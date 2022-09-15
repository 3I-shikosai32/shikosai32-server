import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';

export class NestedUser {
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

  itemIds: string[];

  participateGame: keyof typeof Game;

  pullableGachaTimes: number;

  createdAt: Date;
}
