import { Inject, Injectable } from '@nestjs/common';
import { GiftHistoryRepositoryInterface } from '../domain/service/repository/gift-history.repository';
import { GiftHistoryReaderUseCaseInterface } from '../domain/service/use-case/gift-history-reader.use-case';
import { GiftHistoryWhere, GiftHistoryOrderBy, GiftHistoryCursor } from '../domain/service/use-case/port/gift-history-reader.input';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class GiftHistoryReaderUseCase implements GiftHistoryReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_REPOSITORY)
    private readonly giftHistoryRepository: GiftHistoryRepositoryInterface,
  ) {}

  async findGiftHistory(giftHistoryId: string) {
    const foundGiftHistory = await this.giftHistoryRepository.findUnique({
      where: { id: giftHistoryId },
    });

    return foundGiftHistory;
  }

  async findGiftHistories(where?: GiftHistoryWhere, orderBy?: GiftHistoryOrderBy[], cursor?: GiftHistoryCursor, take?: number, skip?: number) {
    const foundGiftHistories = await this.giftHistoryRepository.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
    });

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
