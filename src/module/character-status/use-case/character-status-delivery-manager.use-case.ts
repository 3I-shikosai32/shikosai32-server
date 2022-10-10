import { Inject, Injectable } from '@nestjs/common';
import { CharacterStatusRepositoryInterface } from '../domain/service/repository/character-status.repository';
import { CharacterStatusDeliveryManagerUseCaseInterface } from '../domain/service/use-case/character-status-delivery-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class CharacterStatusDeliveryManagerUseCase implements CharacterStatusDeliveryManagerUseCaseInterface {
  constructor(
    @Inject(InjectionToken.CHARACTER_STATUS_REPOSITORY)
    private readonly characterStatusRepository: CharacterStatusRepositoryInterface,
  ) {}

  async changeDeliveryState(characterStatusId: string, isDelivered: boolean) {
    const updatedCharacterStatus = await this.characterStatusRepository.update({
      where: { id: characterStatusId },
      data: {
        itemCompletedHistory: {
          isDelivered,
          deliveredAt: isDelivered ? new Date() : null,
        },
      },
    });

    return updatedCharacterStatus;
  }
}
