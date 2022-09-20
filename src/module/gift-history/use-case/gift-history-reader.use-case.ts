import { Inject, Injectable } from '@nestjs/common';
import { FindGiftHistoriesArgs } from '../controller/dto/args/find-gift-histories.args';
import { FindGiftHistoryArgs } from '../controller/dto/args/find-gift-history.args';
import { GiftHistoryRepositoryInterface } from '../domain/service/repository/gift-history.repository';
import { GiftHistoryReaderUseCaseInterface } from '../domain/service/use-case/gift-history-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class GiftHistoryReaderUseCase implements GiftHistoryReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_REPOSITORY)
    private readonly giftHistoryRepository: GiftHistoryRepositoryInterface,
  ) {}

  async findGiftHistory(args: FindGiftHistoryArgs) {
    const foundGiftHistory = await this.giftHistoryRepository.findUnique(args);

    return foundGiftHistory;
  }

  async findGiftHistories(args: FindGiftHistoriesArgs) {
    const foundGiftHistories = await this.giftHistoryRepository.findMany(args);

    return foundGiftHistories;
  }

  async findUserByGiftHistoryId(id: string) {
    const foundUser = await this.giftHistoryRepository.findUserByGiftHistoryId({
      where: { id },
    });

    return foundUser;
  }

  async findGiftByGiftHistoryId(id: string) {
    const foundGift = await this.giftHistoryRepository.findGiftByGiftHistoryId({
      where: { id },
    });

    return foundGift;
  }
}
