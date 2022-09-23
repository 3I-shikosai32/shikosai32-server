import DataLoader from 'dataloader';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { Gift } from '~/gift/domain/model/gift.model';
import { Item } from '~/item/domain/model/item.model';
import { User } from '~/user/domain/model/user.model';

export interface DataLoaderInterface {
  userDataLoader: DataLoader<string, User>;
  userGiftHistoriesDataLoader: DataLoader<string, GiftHistory[]>;
  itemDataLoader: DataLoader<string, Item>;
  giftDataLoader: DataLoader<string, Gift>;
  giftGiftHistoriesDataLoader: DataLoader<string, GiftHistory[]>;
}
