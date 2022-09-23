import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GiftHistory as GiftHistoryModel } from '../domain/model/gift-history.model';
import { GiftHistory } from './dto/object/gift-history.object';
import { Gift } from '~/gift/controller/dto/object/gift.object';
import { GiftDataLoader } from '~/gift/dataloader/gift.dataloader';
import { Gift as GiftModel } from '~/gift/domain/model/gift.model';
import { User } from '~/user/controller/dto/object/user.object';
import { UserDataLoader } from '~/user/dataloader/user.dataloader';
import { User as UserModel } from '~/user/domain/model/user.model';

@Resolver(() => GiftHistory)
export class GiftHistoryResolver {
  constructor(private readonly userDataLoader: UserDataLoader, private readonly giftDataLoader: GiftDataLoader) {}

  @ResolveField(() => User)
  async user(@Parent() giftHistory: GiftHistoryModel): Promise<UserModel> {
    const user = await this.userDataLoader.load(giftHistory.userId);

    return user;
  }

  @ResolveField(() => Gift)
  async gift(@Parent() giftHistory: GiftHistoryModel): Promise<GiftModel> {
    const gift = await this.giftDataLoader.load(giftHistory.giftId);

    return gift;
  }
}
