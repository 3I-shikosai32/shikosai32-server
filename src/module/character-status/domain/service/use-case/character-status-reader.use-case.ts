import { CharacterStatus } from '../../model/character-status.model';
import { CharacterStatusCursor, CharacterStatusOrderBy, CharacterStatusWhere } from './port/character-status-reader.input';

export interface CharacterStatusReaderUseCaseInterface {
  findItemCompletedCharacterStatuses(
    where?: CharacterStatusWhere,
    orderBy?: CharacterStatusOrderBy[],
    cursor?: CharacterStatusCursor,
    take?: number,
    skip?: number,
  ): Promise<CharacterStatus[]>;
}
