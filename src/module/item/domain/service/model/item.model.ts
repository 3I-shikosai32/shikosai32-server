import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { NestedUserInterface } from '~/user/domain/service/model/nested-user.model';

export interface ItemInterface {
  readonly id: string;
  readonly url: string;
  readonly character: keyof typeof Character;
  readonly layer: number;
  readonly users: NestedUserInterface[];
  readonly userIds: string[];
}
