import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { NestedUser } from '~/user/domain/model/nested-user.model';

export class Item {
  readonly id: string;

  readonly url: string;

  readonly character: keyof typeof Character;

  readonly layer: number;

  readonly users: NestedUser[];

  readonly userIds: string[];

  constructor(args: { id: string; url: string; character: keyof typeof Character; layer: number; users: NestedUser[]; userIds: string[] }) {
    this.id = args.id;
    this.url = args.url;
    this.character = args.character;
    this.layer = args.layer;
    this.users = args.users;
    this.userIds = args.userIds;
  }
}
