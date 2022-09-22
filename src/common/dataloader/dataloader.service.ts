import { Injectable } from '@nestjs/common';
import { DataLoaderInterface } from './dataloader.interface';
import { GiftHistoryUserDataLoader } from './loaders/gift-history-user.dataloader';
import { UserGiftHistoriesDataLoader } from './loaders/user-gift-histories.dataloader';

@Injectable()
export class DataLoaderService {
  constructor(
    private readonly userGiftHistoriesDataLoader: UserGiftHistoriesDataLoader,
    private readonly giftHistoryUserDataLoader: GiftHistoryUserDataLoader,
  ) {}

  getLoader(): DataLoaderInterface {
    return {
      userGiftHistoriesDataLoader: this.userGiftHistoriesDataLoader,
      giftHistoryUserDataLoader: this.giftHistoryUserDataLoader,
    };
  }
}
