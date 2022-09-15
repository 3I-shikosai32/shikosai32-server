import { Injectable } from '@nestjs/common';
import { ItemInterface } from '../service/model/item.model';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { NestedUserInterface } from '~/user/domain/service/model/nested-user.model';

@Injectable()
export class Item implements ItemInterface {
  id: string;

  url: string;

  character: keyof typeof Character;

  layer: number;

  users: NestedUserInterface[];

  userIds: string[];
}
