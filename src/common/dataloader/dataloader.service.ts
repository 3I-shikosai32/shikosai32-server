import { Injectable } from '@nestjs/common';
import { DataLoaderInterface } from './dataloader.interface';
import { GiftGiftHistoriesDataLoader } from './loaders/gift-gift-histories.dataloader';
import { GiftDataLoader } from './loaders/gift.dataloader';
import { ItemDataLoader } from './loaders/item.dataloader';
import { UserGiftHistoriesDataLoader } from './loaders/user-gift-histories.dataloader';
import { UserDataLoader } from './loaders/user.dataloader';

@Injectable()
export class DataLoaderService {
  constructor(
    private readonly userDataLoader: UserDataLoader,
    private readonly userGiftHistoriesDataLoader: UserGiftHistoriesDataLoader,
    private readonly itemDataLoader: ItemDataLoader,
    private readonly giftDataLoader: GiftDataLoader,
    private readonly giftGiftHistoriesDataLoader: GiftGiftHistoriesDataLoader,
  ) {}

  getLoader(): DataLoaderInterface {
    return {
      userDataLoader: this.userDataLoader,
      userGiftHistoriesDataLoader: this.userGiftHistoriesDataLoader,
      itemDataLoader: this.itemDataLoader,
      giftDataLoader: this.giftDataLoader,
      giftGiftHistoriesDataLoader: this.giftGiftHistoriesDataLoader,
    };
  }
}
