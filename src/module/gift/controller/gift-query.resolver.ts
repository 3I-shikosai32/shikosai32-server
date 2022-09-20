import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GiftReaderUseCaseInterface } from '../domain/service/use-case/gift-reader.use-case';
import { FindGiftArgs } from './dto/args/find-gift.args';
import { FindGiftsArgs } from './dto/args/find-gifts.args';
import { Gift } from './dto/object/gift.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class GiftQuery {
  constructor(
    @Inject(InjectionToken.GIFT_READER_USE_CASE)
    private readonly giftReaderUseCase: GiftReaderUseCaseInterface,
  ) {}

  @Query(() => Gift, { nullable: true })
  async findGift(@Args() args: FindGiftArgs): Promise<Gift | null> {
    const foundGift = await this.giftReaderUseCase.findGift(args);

    return foundGift;
  }

  @Query(() => [Gift])
  async findGifts(@Args() args: FindGiftsArgs): Promise<Gift[]> {
    const foundGifts = await this.giftReaderUseCase.findGifts(args);

    return foundGifts;
  }
}
