import { GiftInterface } from '../model/gift.model';
import { FindGiftArgs } from '~/gift/controller/dto/args/find-gift.args';
import { FindGiftsArgs } from '~/gift/controller/dto/args/find-gifts.args';

export interface GiftReaderUseCaseInterface {
  findGift(args: FindGiftArgs): Promise<GiftInterface | null>;
  findGifts(args: FindGiftsArgs): Promise<GiftInterface[]>;
}
