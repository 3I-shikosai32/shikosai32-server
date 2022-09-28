import { Inject, Injectable } from '@nestjs/common';
import { GiftRepositoryInterface } from '../domain/service/repository/gift.repository';
import { GiftReaderUseCaseInterface } from '../domain/service/use-case/gift-reader.use-case';
import { GiftCursor, GiftOrderBy, GiftWhere } from '../domain/service/use-case/port/gift-reader.input';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class GiftReaderUseCase implements GiftReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.GIFT_REPOSITORY)
    private readonly giftRepository: GiftRepositoryInterface,
  ) {}

  async findGift(giftId: string) {
    const foundGift = await this.giftRepository.findUnique({
      where: { id: giftId },
    });

    return foundGift;
  }

  async findGifts(where?: GiftWhere, orderBy?: GiftOrderBy[], cursor?: GiftCursor, take?: number, skip?: number) {
    const foundGifts = await this.giftRepository.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
    });

    return foundGifts;
  }
}
