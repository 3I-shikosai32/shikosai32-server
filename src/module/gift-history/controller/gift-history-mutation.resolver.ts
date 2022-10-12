import { Inject, Logger, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GiftHistory as GiftHistoryModel } from '../domain/model/gift-history.model';
import { GiftHistoryCreatorUseCaseInterface } from '../domain/service/use-case/gift-history-creator.use-case';
import { GiftHistoryDeliveryManagerUseCaseInterface } from '../domain/service/use-case/gift-history-delivery-manager.use-case';
import { ChangeDeliveryStateGiftHistoryArgs } from './dto/args/change-delivery-state-gift-history.args';
import { ExchangeGiftArgs } from './dto/args/exchange-gift.args';
import { GiftHistory } from './dto/object/gift-history.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { AuthGuard } from '@/guard/auth.guard';
import { RoleGuard } from '@/guard/role.guard';

@Resolver()
@UseGuards(AuthGuard)
export class GiftHistoryMutation {
  private readonly logger = new Logger(GiftHistoryMutation.name);

  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_CREATOR_USE_CASE)
    private readonly giftHistoryCreatorUseCase: GiftHistoryCreatorUseCaseInterface,
    @Inject(InjectionToken.GIFT_HISTORY_DELIVERY_MANAGER_USE_CASE)
    private readonly giftHistoryDeliveryManagerUseCase: GiftHistoryDeliveryManagerUseCaseInterface,
  ) {}

  @Mutation(() => GiftHistory)
  @UseGuards(RoleGuard)
  async changeDeliveryStateGiftHistory(@Args() args: ChangeDeliveryStateGiftHistoryArgs): Promise<GiftHistoryModel> {
    this.logger.log('changeDeliveryStateGiftHistory called');
    this.logger.log(args);

    const updatedGiftHistory = await this.giftHistoryDeliveryManagerUseCase.changeDeliveryState(args.where.id, args.data);

    return updatedGiftHistory;
  }

  @Mutation(() => [GiftHistory])
  async exchangeGift(@Args() args: ExchangeGiftArgs): Promise<GiftHistoryModel[]> {
    this.logger.log('exchangeGift called');
    this.logger.log(args);

    const createdGiftHistories = await this.giftHistoryCreatorUseCase.exchangeGift(args.data, args.exchangeQuantity);

    return createdGiftHistories;
  }
}
