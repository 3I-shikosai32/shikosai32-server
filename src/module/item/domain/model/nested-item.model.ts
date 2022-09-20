import { Character } from '@/infra/prisma/generated/prisma/character/enum';

export class NestedItem {
  id: string;

  url: string;

  character: keyof typeof Character;

  layer: number;

  userIds: string[];
}
