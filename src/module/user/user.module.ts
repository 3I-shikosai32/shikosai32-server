import { Module } from '@nestjs/common';
import { UserMutation } from './controller/user-mutation.resolver';
import { UserQuery } from './controller/user-query.resolver';
import { UserSubscription } from './controller/user-subscription.resolver';
import { UserResolver } from './controller/user.resolver';
import { UserRepository } from './repository/user.repository';
import { UserCreatorUseCase } from './use-case/user-creator.use-case';
import { UserGachaManagerUseCase } from './use-case/user-gacha-manager.use-case';
import { UserGameManagerUseCase } from './use-case/user-game-manager.use-case';
import { UserReaderUseCase } from './use-case/user-reader.use-case';
import { UserUpdaterUseCase } from './use-case/user-updater.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { ItemModule } from '~/item/item.module';

@Module({
  imports: [ItemModule],
  providers: [
    { provide: InjectionToken.USER_REPOSITORY, useClass: UserRepository },
    { provide: InjectionToken.USER_READER_USE_CASE, useClass: UserReaderUseCase },
    { provide: InjectionToken.USER_CREATOR_USE_CASE, useClass: UserCreatorUseCase },
    { provide: InjectionToken.USER_UPDATER_USE_CASE, useClass: UserUpdaterUseCase },
    { provide: InjectionToken.USER_GAME_MANAGER_USE_CASE, useClass: UserGameManagerUseCase },
    { provide: InjectionToken.USER_GACHA_MANAGER_USE_CASE, useClass: UserGachaManagerUseCase },
    UserResolver,
    UserQuery,
    UserMutation,
    UserSubscription,
  ],
  exports: [{ provide: InjectionToken.USER_REPOSITORY, useClass: UserRepository }],
})
export class UserModule {}
