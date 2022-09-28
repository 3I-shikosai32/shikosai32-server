import { Gift } from '../../model/gift.model';
import { GiftCursor, GiftOrderBy, GiftWhere } from './port/gift-reader.input';

export interface GiftReaderUseCaseInterface {
  findGift(giftId: string): Promise<Gift | null>;
  findGifts(where?: GiftWhere, orderBy?: GiftOrderBy[], cursor?: GiftCursor, take?: number, skip?: number): Promise<Gift[]>;
}
