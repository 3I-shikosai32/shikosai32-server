import { Inject, Injectable } from '@nestjs/common';
import { FindGiftArgs } from '../controller/dto/args/find-gift.args';
import { FindGiftsArgs } from '../controller/dto/args/find-gifts.args';
import { GiftRepositoryInterface } from '../domain/service/repository/gift.repository';
import { GiftReaderUseCaseInterface } from '../domain/service/use-case/gift-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class GiftReaderUseCase implements GiftReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.GIFT_REPOSITORY)
    private readonly giftRepository: GiftRepositoryInterface,
  ) {}

  async findGift(args: FindGiftArgs) {
    const foundGift = await this.giftRepository.findUnique(args);

    return foundGift;
  }

  async findGifts(args: FindGiftsArgs) {
    const foundGifts = await this.giftRepository.findMany(args);

    return foundGifts;
  }
}
