import { forwardRef, Module } from '@nestjs/common';
import { CharacterStatusMutation } from './controller/character-status-mutation.resolver';
import { CharacterStatusQuery } from './controller/character-status-query.resolver';
import { CharacterStatusResolver } from './controller/character-status.resolver';
import { CharacterStatusRepository } from './repository/character-status.repository';
import { CharacterStatusDeliveryManagerUseCase } from './use-case/character-status-delivery-manager.use-case';
import { CharacterStatusReaderUseCase } from './use-case/character-status-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { ItemModule } from '~/item/item.module';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule), ItemModule],
  providers: [
    { provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: CharacterStatusRepository },
    { provide: InjectionToken.CHARACTER_STATUS_READER_USE_CASE, useClass: CharacterStatusReaderUseCase },
    { provide: InjectionToken.CHARACTER_STATUS_DELIVERY_MANAGER_USE_CASE, useClass: CharacterStatusDeliveryManagerUseCase },
    CharacterStatusResolver,
    CharacterStatusQuery,
    CharacterStatusMutation,
  ],
  exports: [
    { provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: CharacterStatusRepository },
    { provide: InjectionToken.CHARACTER_STATUS_READER_USE_CASE, useClass: CharacterStatusReaderUseCase },
  ],
})
export class CharacterStatusModule {}
