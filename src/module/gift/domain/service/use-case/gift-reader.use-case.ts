import { Gift } from '../../model/gift.model';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { FindGiftArgs } from '~/gift/controller/dto/args/find-gift.args';
import { FindGiftsArgs } from '~/gift/controller/dto/args/find-gifts.args';

export interface GiftReaderUseCaseInterface {
  findGift(args: FindGiftArgs): Promise<Gift | null>;
  findGifts(args: FindGiftsArgs): Promise<Gift[]>;
  findGiftHistoriesByGiftId(id: string): Promise<GiftHistory[]>;
}
