import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Gift as GiftModel } from '../domain/model/gift.model';
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
  async findGift(@Args() args: FindGiftArgs): Promise<GiftModel | null> {
    const foundGift = await this.giftReaderUseCase.findGift(args);

    return foundGift;
  }

  @Query(() => [Gift])
  async findGifts(@Args() args: FindGiftsArgs): Promise<GiftModel[]> {
    const foundGifts = await this.giftReaderUseCase.findGifts(args);

    return foundGifts;
  }
}
