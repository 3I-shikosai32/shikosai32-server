import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { NestedUser } from '~/user/domain/model/nested-user.model';

export class Item {
  id: string;

  url: string;

  character: keyof typeof Character;

  layer: number;

  users: NestedUser[];

  userIds: string[];
}
