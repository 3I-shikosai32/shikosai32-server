import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
// import { match, P } from 'ts-pattern';
import { UserGiftHistoriesDataLoader } from '../dataloader/user-gift-histories.dataloader';
import { User as UserModel } from '../domain/model/user.model';
import { User } from './dto/object/user.object';
import { GiftHistory } from '~/gift-history/controller/dto/object/gift-history.object';
import { GiftHistory as GiftHistoryModel } from '~/gift-history/domain/model/gift-history.model';
// import { Item } from '~/item/controller/dto/object/item.object';
import { ItemDataLoader } from '~/item/dataloader/item.dataloader';
// import { Item as ItemModel } from '~/item/domain/model/item.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userGiftHistoriesDataLoader: UserGiftHistoriesDataLoader, private readonly itemDataLoader: ItemDataLoader) {}

  // @ResolveField(() => [Item])
  // async items(@Parent() user: UserModel): Promise<ItemModel[]> {
  //   const itemsOrErrors = await this.itemDataLoader.loadMany(user.itemIds);

  //   const items = match(itemsOrErrors)
  //     .with(P.array(P.instanceOf(Error)), (errors) => {
  //       throw errors;
  //     })
  //     .with(P.array(P.instanceOf(ItemModel)), (matchedItems) => matchedItems)
  //     .otherwise(() => {
  //       throw new Error('Unexpected error');
  //     });

  //   return items;
  // }

  @ResolveField(() => [GiftHistory])
  async giftHistories(@Parent() user: UserModel): Promise<GiftHistoryModel[]> {
    const giftHistories = await this.userGiftHistoriesDataLoader.load(user.id);

    return giftHistories;
  }
}
