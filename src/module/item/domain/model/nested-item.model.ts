import { Injectable } from '@nestjs/common';
import { NestedItemInterface } from '../service/model/nested-item.model';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';

@Injectable()
export class NestedItem implements NestedItemInterface {
  id: string;

  url: string;

  character: keyof typeof Character;

  layer: number;

  userIds: string[];
}
