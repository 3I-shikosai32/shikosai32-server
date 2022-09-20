import { Character } from '@/infra/prisma/generated/prisma/character/enum';

export class Item {
  readonly id: string;

  readonly url: string;

  readonly character: keyof typeof Character;

  readonly layer: number;

  readonly userIds: string[];

  constructor(args: { id: string; url: string; character: keyof typeof Character; layer: number; userIds: string[] }) {
    this.id = args.id;
    this.url = args.url;
    this.character = args.character;
    this.layer = args.layer;
    this.userIds = args.userIds;
  }
}
