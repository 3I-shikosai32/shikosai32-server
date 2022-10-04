import { forwardRef, Module } from '@nestjs/common';
import { CharacterStatusResolver } from './controller/character-status.resolver';
import { CharacterStatusRepository } from './repository/character-status.repository';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { ItemModule } from '~/item/item.module';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule), ItemModule],
  providers: [{ provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: CharacterStatusRepository }, CharacterStatusResolver],
  exports: [{ provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: CharacterStatusRepository }],
})
export class CharacterStatusModule {}
