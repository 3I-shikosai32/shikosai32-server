import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CharacterStatus as CharacterStatusModel } from '../domain/model/character-status.model';
import { CharacterStatusReaderUseCaseInterface } from '../domain/service/use-case/character-status-reader.use-case';
import { FindItemCompletedCharacterStatusesArgs } from './dto/args/find-item-completed-character-statuses.args';
import { CharacterStatus } from './dto/object/character-status.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class CharacterStatusQuery {
  private readonly logger = new Logger(CharacterStatusQuery.name);

  constructor(
    @Inject(InjectionToken.CHARACTER_STATUS_READER_USE_CASE)
    private readonly characterStatusReaderUseCase: CharacterStatusReaderUseCaseInterface,
  ) {}

  @Query(() => [CharacterStatus])
  async findItemCompletedCharacterStatuses(@Args() args: FindItemCompletedCharacterStatusesArgs): Promise<CharacterStatusModel[]> {
    this.logger.log('findItemCompletedCharacterStatuses called');
    this.logger.log(args);

    const foundItemCompletedHistories = await this.characterStatusReaderUseCase.findItemCompletedCharacterStatuses(
      args.where,
      args.orderBy,
      args.cursor,
      args.take,
      args.skip,
    );

    return foundItemCompletedHistories;
  }
}
