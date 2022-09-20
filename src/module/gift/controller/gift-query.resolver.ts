import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Gift as GiftModel } from '../domain/model/gift.model';
import { GiftReaderUseCaseInterface } from '../domain/service/use-case/gift-reader.use-case';
import { FindGiftArgs } from './dto/args/find-gift.args';
import { FindGiftsArgs } from './dto/args/find-gifts.args';
import { Gift } from './dto/object/gift.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class GiftQuery {
  private readonly logger = new Logger(GiftQuery.name);

  constructor(
    @Inject(InjectionToken.GIFT_READER_USE_CASE)
    private readonly giftReaderUseCase: GiftReaderUseCaseInterface,
  ) {}

  @Query(() => Gift, { nullable: true })
  async findGift(@Args() args: FindGiftArgs): Promise<GiftModel | null> {
    this.logger.log('findGift called');
    this.logger.log(args);

    const foundGift = await this.giftReaderUseCase.findGift(args);

    this.logger.log(foundGift);

    return foundGift;
  }

  @Query(() => [Gift])
  async findGifts(@Args() args: FindGiftsArgs): Promise<GiftModel[]> {
    this.logger.log('findGifts called');
    this.logger.log(args);

    const foundGifts = await this.giftReaderUseCase.findGifts(args);

    this.logger.log(foundGifts);

    return foundGifts;
  }
}
