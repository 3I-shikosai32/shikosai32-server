import { Inject, Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CharacterStatus as CharacterStatusModel } from '../domain/model/character-status.model';
import { CharacterStatusDeliveryManagerUseCaseInterface } from '../domain/service/use-case/character-status-delivery-manager.use-case';
import { ChangeDeliveryStateCharacterStatusArgs } from './dto/args/change-delivery-state-character-status.args';
import { CharacterStatus } from './dto/object/character-status.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class CharacterStatusMutation {
  private readonly logger = new Logger(CharacterStatusMutation.name);

  constructor(
    @Inject(InjectionToken.CHARACTER_STATUS_DELIVERY_MANAGER_USE_CASE)
    private readonly characterStatusDeliveryManagerUseCase: CharacterStatusDeliveryManagerUseCaseInterface,
  ) {}

  @Mutation(() => CharacterStatus)
  async changeDeliveryStateCharacterStatus(@Args() args: ChangeDeliveryStateCharacterStatusArgs): Promise<CharacterStatusModel> {
    this.logger.log('changeDeliveryStateCharacterStatus called');
    this.logger.log(args);

    const updatedCharacterStatus = await this.characterStatusDeliveryManagerUseCase.changeDeliveryState(args.where.id, args.delivered);

    return updatedCharacterStatus;
  }
}
