import { Character } from '@prisma/client';
import { ItemCompletedHistory } from './item-completed-history.model';

export class CharacterStatus {
  readonly id: string;

  readonly character: Character;

  readonly iconUrl: string;

  readonly avatarUrl: string;

  readonly characterPointDay1: number;

  readonly characterPointDay2: number;

  readonly userId: string;

  readonly itemIds: string[];

  readonly itemCompletedHistory: ItemCompletedHistory | null;

  constructor(args: {
    id: string;
    character: Character;
    iconUrl: string;
    avatarUrl: string;
    characterPointDay1: number;
    characterPointDay2: number;
    userId: string;
    itemIds: string[];
    itemCompletedHistory: ItemCompletedHistory | null;
  }) {
    this.id = args.id;
    this.character = args.character;
    this.iconUrl = args.iconUrl;
    this.avatarUrl = args.avatarUrl;
    this.characterPointDay1 = args.characterPointDay1;
    this.characterPointDay2 = args.characterPointDay2;
    this.userId = args.userId;
    this.itemIds = args.itemIds;
    this.itemCompletedHistory = args.itemCompletedHistory;
  }

  isItemCompleted(): boolean {
    return this.itemIds.length === 4;
  }

  shouldCreateItemCompletedHistory(): boolean {
    return this.isItemCompleted() && this.itemCompletedHistory === null;
  }
}
