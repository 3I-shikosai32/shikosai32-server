import { Module } from '@nestjs/common';
import { GiftQuery } from './controller/gift-query.resolver';
import { GiftResolver } from './controller/gift.resolver';
import { GiftRepository } from './repository/gift.repository';
import { GiftReaderUseCase } from './use-case/gift-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Module({
  providers: [
    { provide: InjectionToken.GIFT_REPOSITORY, useClass: GiftRepository },
    { provide: InjectionToken.GIFT_READER_USE_CASE, useClass: GiftReaderUseCase },
    GiftResolver,
    GiftQuery,
  ],
  exports: [{ provide: InjectionToken.GIFT_REPOSITORY, useClass: GiftRepository }],
})
export class GiftModule {}
