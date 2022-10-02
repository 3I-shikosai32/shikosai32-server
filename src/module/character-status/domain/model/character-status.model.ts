import { Character } from '@prisma/client';

export class CharacterStatus {
  readonly id: string;

  readonly character: Character;

  readonly iconUrl: string;

  readonly avatarUrl: string;

  readonly characterPointDay1: number;

  readonly characterPointDay2: number;

  readonly userId: string;

  readonly itemIds: string[];

  constructor(args: {
    id: string;
    character: Character;
    iconUrl: string;
    avatarUrl: string;
    characterPointDay1: number;
    characterPointDay2: number;
    userId: string;
    itemIds: string[];
  }) {
    this.id = args.id;
    this.character = args.character;
    this.iconUrl = args.iconUrl;
    this.avatarUrl = args.avatarUrl;
    this.characterPointDay1 = args.characterPointDay1;
    this.characterPointDay2 = args.characterPointDay2;
    this.userId = args.userId;
    this.itemIds = args.itemIds;
  }
}
