import { Module } from '@nestjs/common';
import { CharacterStatusRepository } from './repository/character-status.repository';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Module({
  providers: [{ provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: CharacterStatusRepository }],
  exports: [{ provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: CharacterStatusRepository }],
})
export class CharacterStatusModule {}
