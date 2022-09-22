import DataLoader from 'dataloader';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { User } from '~/user/domain/model/user.model';

export interface DataLoaderInterface {
  userGiftHistoriesDataLoader: DataLoader<string, GiftHistory[]>;
  giftHistoryUserDataLoader: DataLoader<string, User>;
}
