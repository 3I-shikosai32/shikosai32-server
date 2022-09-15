import { Character } from '@/infra/prisma/generated/prisma/character/enum';

export interface NestedItemInterface {
  readonly id: string;
  readonly url: string;
  readonly character: keyof typeof Character;
  readonly layer: number;
  readonly userIds: string[];
}
