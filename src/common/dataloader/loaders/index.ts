import { GiftGiftHistoriesDataLoader } from './gift-gift-histories.dataloader';
import { GiftDataLoader } from './gift.dataloader';
import { ItemDataLoader } from './item.dataloader';
import { UserGiftHistoriesDataLoader } from './user-gift-histories.dataloader';
import { UserDataLoader } from './user.dataloader';

export const Loaders = [UserDataLoader, UserGiftHistoriesDataLoader, ItemDataLoader, GiftDataLoader, GiftGiftHistoriesDataLoader];
