import { Character } from '@prisma/client';
import { CharacterStatus } from '../../model/character-status.model';
import { CharacterStatusCursor, CharacterStatusOrderBy, CharacterStatusWhere } from './port/character-status-reader.input';

export interface CharacterStatusReaderUseCaseInterface {
  findIncludeCharacterFromUserIds(userIds: string[]): Promise<Character[]>;
  findItemCompletedCharacterStatuses(
    where?: CharacterStatusWhere,
    orderBy?: CharacterStatusOrderBy[],
    cursor?: CharacterStatusCursor,
    take?: number,
    skip?: number,
  ): Promise<CharacterStatus[]>;
}
