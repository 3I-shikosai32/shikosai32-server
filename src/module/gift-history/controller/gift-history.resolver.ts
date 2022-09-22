import { Inject } from '@nestjs/common';
import { Context, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GiftHistory as GiftHistoryModel } from '../domain/model/gift-history.model';
import { GiftHistoryReaderUseCaseInterface } from '../domain/service/use-case/gift-history-reader.use-case';
import { GiftHistory } from './dto/object/gift-history.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { GqlContext } from '@/config/graphql/graphql-config.module';
import { Gift } from '~/gift/controller/dto/object/gift.object';
import { Gift as GiftModel } from '~/gift/domain/model/gift.model';
import { User } from '~/user/controller/dto/object/user.object';
import { User as UserModel } from '~/user/domain/model/user.model';

@Resolver(() => GiftHistory)
export class GiftHistoryResolver {
  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_READER_USE_CASE)
    private readonly giftHistoryReaderUseCase: GiftHistoryReaderUseCaseInterface,
  ) {}

  @ResolveField(() => User)
  async user(@Parent() giftHistory: GiftHistoryModel, @Context() ctx: GqlContext): Promise<UserModel> {
    const user = await ctx.loader.giftHistoryUserDataLoader.load(giftHistory.userId);

    return user;
  }

  @ResolveField(() => Gift)
  async gift(@Parent() giftHistory: GiftHistoryModel): Promise<GiftModel> {
    const gift = await this.giftHistoryReaderUseCase.findGiftByGiftHistoryId(giftHistory.id);
    if (!gift) {
      throw new Error('Gift not found');
    }

    return gift;
  }
}
