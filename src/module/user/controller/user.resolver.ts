import { Inject } from '@nestjs/common';
import { Context, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User as UserModel } from '../domain/model/user.model';
import { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { User } from './dto/object/user.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { GqlContext } from '@/config/graphql/graphql-config.module';
import { GiftHistory } from '~/gift-history/controller/dto/object/gift-history.object';
import { GiftHistory as GiftHistoryModel } from '~/gift-history/domain/model/gift-history.model';
import { Item } from '~/item/controller/dto/object/item.object';
import { Item as ItemModel } from '~/item/domain/model/item.model';

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject(InjectionToken.USER_READER_USE_CASE)
    private readonly readerUseCase: UserReaderUseCaseInterface,
  ) {}

  @ResolveField(() => [Item])
  async items(@Parent() user: UserModel): Promise<ItemModel[]> {
    const items = await this.readerUseCase.findItemsByUserId(user.id);

    return items;
  }

  @ResolveField(() => [GiftHistory])
  async giftHistories(@Parent() user: UserModel, @Context() ctx: GqlContext): Promise<GiftHistoryModel[]> {
    const giftHistories = await ctx.loader.userGiftHistoriesDataLoader.load(user.id);

    return giftHistories;
  }
}
