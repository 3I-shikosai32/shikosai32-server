import { Module } from '@nestjs/common';
import { GiftQuery } from './controller/gift-query.resolver';
import { Gift } from './domain/model/gift.model';
import { NestedGift } from './domain/model/nested-gift.model';
import { GiftRepository } from './repository/gift.repository';
import { GiftReaderUseCase } from './use-case/gift-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Module({
  providers: [
    { provide: InjectionToken.GIFT, useClass: Gift },
    { provide: InjectionToken.NESTED_GIFT, useClass: NestedGift },
    { provide: InjectionToken.GIFT_REPOSITORY, useClass: GiftRepository },
    { provide: InjectionToken.GIFT_READER_USE_CASE, useClass: GiftReaderUseCase },
    GiftQuery,
  ],
  exports: [
    { provide: InjectionToken.GIFT, useClass: Gift },
    { provide: InjectionToken.NESTED_GIFT, useClass: NestedGift },
    { provide: InjectionToken.GIFT_REPOSITORY, useClass: GiftRepository },
  ],
})
export class GiftModule {}
