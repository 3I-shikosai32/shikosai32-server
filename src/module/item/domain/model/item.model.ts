import { Character } from '@/infra/prisma/generated/prisma/character/enum';

export class Item {
  readonly id: string;

  readonly iconUrl: string;

  readonly layerUrl: string;

  readonly character: keyof typeof Character;

  readonly layer: number;

  readonly characterStatusIds: string[];

  constructor(args: {
    id: string;
    iconUrl: string;
    layerUrl: string;
    character: keyof typeof Character;
    layer: number;
    characterStatusIds: string[];
  }) {
    this.id = args.id;
    this.iconUrl = args.iconUrl;
    this.layerUrl = args.layerUrl;
    this.character = args.character;
    this.layer = args.layer;
    this.characterStatusIds = args.characterStatusIds;
  }
}
