import { Inject, Injectable, Scope } from '@nestjs/common';
import { BaseDataLoader } from '@/common/base/dataloader/base.dataloader';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { CharacterStatus } from '~/character-status/domain/model/character-status.model';
import { CharacterStatusRepositoryInterface } from '~/character-status/domain/service/repository/character-status.repository';

@Injectable({ scope: Scope.REQUEST })
export class UserCharacterStatusDataLoader extends BaseDataLoader<string, CharacterStatus> {
  constructor(
    @Inject(InjectionToken.CHARACTER_STATUS_REPOSITORY)
    private readonly characterStatusRepository: CharacterStatusRepositoryInterface,
  ) {
    super();
  }

  protected async batchLoad(userIds: string[]): Promise<(CharacterStatus | Error)[]> {
    const characterStatuses = await this.characterStatusRepository.findMany({
      where: {
        isActive: true,
        userId: { in: userIds },
      },
    });

    const mappedCharacterStatusesList = userIds.map((userId) => {
      const mappedCharacterStatuses = characterStatuses.filter((characterStatus) => characterStatus.userId === userId);
      if (mappedCharacterStatuses.length === 0) {
        return new Error(`CharacterStatus with userId ${userId} not found`);
      }
      if (mappedCharacterStatuses.length > 1) {
        return new Error(`CharacterStatus with userId ${userId} is duplicated`);
      }

      return mappedCharacterStatuses[0];
    });

    return mappedCharacterStatusesList;
  }
}
