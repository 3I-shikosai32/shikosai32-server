import { Inject, Logger, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GiftHistory as GiftHistoryModel } from '../domain/model/gift-history.model';
import { GiftHistoryCreatorUseCaseInterface } from '../domain/service/use-case/gift-history-creator.use-case';
import { GiftHistoryUpdaterUseCaseInterface } from '../domain/service/use-case/gift-history-updater.use-case';
import { ExchangeGiftArgs } from './dto/args/exchange-gift.args';
import { UpdateGiftHistoryArgs } from './dto/args/update-gift-history.args';
import { GiftHistory } from './dto/object/gift-history.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { AuthGuard } from '@/common/guard/auth.guard';
import { RoleGuard } from '@/common/guard/role.guard';

@Resolver()
@UseGuards(AuthGuard)
export class GiftHistoryMutation {
  private readonly logger = new Logger(GiftHistoryMutation.name);

  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_CREATOR_USE_CASE)
    private readonly giftHistoryCreatorUseCase: GiftHistoryCreatorUseCaseInterface,
    @Inject(InjectionToken.GIFT_HISTORY_UPDATER_USE_CASE)
    private readonly giftHistoryUpdaterUseCase: GiftHistoryUpdaterUseCaseInterface,
  ) {}

  @Mutation(() => GiftHistory)
  @UseGuards(RoleGuard)
  async updateGiftHistory(@Args() args: UpdateGiftHistoryArgs): Promise<GiftHistoryModel> {
    this.logger.log('updateGiftHistory called');
    this.logger.log(args);

    const updatedGiftHistory = await this.giftHistoryUpdaterUseCase.updateGiftHistory(args.where.id, args.data);

    this.logger.log(updatedGiftHistory);

    return updatedGiftHistory;
  }

  @Mutation(() => [GiftHistory])
  async exchangeGift(@Args() args: ExchangeGiftArgs): Promise<GiftHistoryModel[]> {
    this.logger.log('exchangeGift called');
    this.logger.log(args);

    const createdGiftHistories = await this.giftHistoryCreatorUseCase.exchangeGift(args.data, args.exchangeQuantity);

    this.logger.log(createdGiftHistories);

    return createdGiftHistories;
  }
}
