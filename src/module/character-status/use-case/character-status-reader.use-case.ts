import { Inject, Injectable } from '@nestjs/common';
import { CharacterStatusRepositoryInterface } from '../domain/service/repository/character-status.repository';
import { CharacterStatusReaderUseCaseInterface } from '../domain/service/use-case/character-status-reader.use-case';
import { CharacterStatusCursor, CharacterStatusOrderBy, CharacterStatusWhere } from '../domain/service/use-case/port/character-status-reader.input';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class CharacterStatusReaderUseCase implements CharacterStatusReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.CHARACTER_STATUS_REPOSITORY)
    private readonly characterStatusRepository: CharacterStatusRepositoryInterface,
  ) {}

  async findItemCompletedCharacterStatuses(
    where?: CharacterStatusWhere,
    orderBy?: CharacterStatusOrderBy[],
    cursor?: CharacterStatusCursor,
    take?: number,
    skip?: number,
  ) {
    const foundItemCompletedCharacterStatuses = await this.characterStatusRepository.findMany({
      where: {
        ...where,
        NOT: {
          ...where?.NOT,
          itemCompletedHistory: null,
        },
      },
      orderBy,
      cursor,
      take,
      skip,
    });

    return foundItemCompletedCharacterStatuses;
  }
}
