import { Inject, Logger, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ItemCompletedHistory as ItemCompletedHistoryModel } from '../domain/model/item-completed-history.model';
import { ItemCompletedHistoryDeliveryManagerUseCaseInterface } from '../domain/service/use-case/item-completed-history-delivery-manager.use-case';
import { ChangeDeliveryStatusItemCompletedHistoryArgs } from './dto/args/change-delivery-status-item-completed-history.args';
import { ItemCompletedHistory } from './dto/object/item-completed-history.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { AuthGuard } from '@/guard/auth.guard';
import { RoleGuard } from '@/guard/role.guard';

@Resolver()
@UseGuards(AuthGuard)
export class ItemCompletedHistoryMutation {
  private readonly logger = new Logger(ItemCompletedHistoryMutation.name);

  constructor(
    @Inject(InjectionToken.ITEM_COMPLETED_HISTORY_DELIVERY_MANAGER_USE_CASE)
    private readonly itemCompletedHistoryDeliveryManagerUseCase: ItemCompletedHistoryDeliveryManagerUseCaseInterface,
  ) {}

  @Mutation(() => ItemCompletedHistory)
  @UseGuards(RoleGuard)
  async changeDeliveryStatusItemCompletedHistory(@Args() args: ChangeDeliveryStatusItemCompletedHistoryArgs): Promise<ItemCompletedHistoryModel> {
    this.logger.log('changeDeliveryStatusItemCompletedHistory called');
    this.logger.log(args);

    const updatedItemCompletedHistory = await this.itemCompletedHistoryDeliveryManagerUseCase.changeDeliveryStatus(
      args.where.id,
      args.data.isDelivered,
    );

    return updatedItemCompletedHistory;
  }
}
