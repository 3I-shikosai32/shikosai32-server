import { Inject, Logger, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserDataLoader } from '../dataloader/user.dataloader';
import { User as UserModel } from '../domain/model/user.model';
import { UserCreatorUseCaseInterface } from '../domain/service/use-case/user-creator.use-case';
import { UserGachaManagerUseCaseInterface } from '../domain/service/use-case/user-gacha-manager.use-case';
import { UserGameManagerUseCaseInterface } from '../domain/service/use-case/user-game-manager.use-case';
import { UserUpdaterUseCaseInterface } from '../domain/service/use-case/user-updater.use-case';
import { CreateUserArgs } from './dto/args/create-user.args';
import { ExitGameArgs } from './dto/args/exit-game.args';
import { IncrementPointArgs } from './dto/args/increment-point.args';
import { JoinGameArgs } from './dto/args/join-game.args';
import { PullGachaArgs } from './dto/args/pull-gacha.args';
import { UpdateUserArgs } from './dto/args/update-user.args';
import { User } from './dto/object/user.object';
import { DataLoaderCacheService } from '@/cache/dataloader-cache.service';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { AuthGuard } from '@/common/guard/auth.guard';
import { RoleGuard } from '@/common/guard/role.guard';
import { Item } from '~/item/controller/dto/object/item.object';
import { ItemDataLoader } from '~/item/dataloader/item.dataloader';
import { Item as ItemModel } from '~/item/domain/model/item.model';

@Resolver()
@UseGuards(AuthGuard)
export class UserMutation {
  private readonly logger = new Logger(UserMutation.name);

  constructor(
    @Inject(InjectionToken.USER_CREATOR_USE_CASE)
    private readonly creatorUseCase: UserCreatorUseCaseInterface,
    @Inject(InjectionToken.USER_UPDATER_USE_CASE)
    private readonly updaterUseCase: UserUpdaterUseCaseInterface,
    @Inject(InjectionToken.USER_GAME_MANAGER_USE_CASE)
    private readonly gameManagerUseCase: UserGameManagerUseCaseInterface,
    @Inject(InjectionToken.USER_GACHA_MANAGER_USE_CASE)
    private readonly gachaManagerUseCase: UserGachaManagerUseCaseInterface,
    private readonly userDataLoader: UserDataLoader,
    private readonly dataLoaderCacheService: DataLoaderCacheService<UserModel, string>,
    private readonly itemDataLoader: ItemDataLoader,
    private readonly itemDataLoaderCacheService: DataLoaderCacheService<ItemModel, string>,
  ) {}

  @Mutation(() => User)
  async createUser(@Args() args: CreateUserArgs): Promise<UserModel> {
    this.logger.log('createUser called');
    this.logger.log(args);

    const createdUser = await this.creatorUseCase.createUser(args);

    this.dataLoaderCacheService.prime(this.userDataLoader, createdUser);

    this.logger.log(createdUser);

    return createdUser;
  }

  @Mutation(() => User)
  async updateUser(@Args() args: UpdateUserArgs): Promise<UserModel> {
    this.logger.log('updateUser called');
    this.logger.log(args);

    const updatedUser = await this.updaterUseCase.updateUser(args);

    this.dataLoaderCacheService.prime(this.userDataLoader, updatedUser);

    this.logger.log(updatedUser);

    return updatedUser;
  }

  @Mutation(() => [User])
  @UseGuards(RoleGuard)
  async incrementPoint(@Args() args: IncrementPointArgs): Promise<UserModel[]> {
    this.logger.log('incrementPoint called');
    this.logger.log(args);

    const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    const isBeforeDay2 = now <= new Date('2022-10-22');

    const incrementedUser = await this.gameManagerUseCase.incrementPoint(args, isBeforeDay2);

    this.dataLoaderCacheService.primeMany(this.userDataLoader, incrementedUser);

    this.logger.log(incrementedUser);

    return incrementedUser;
  }

  @Mutation(() => User)
  async joinGame(@Args() args: JoinGameArgs): Promise<UserModel> {
    this.logger.log('joinGame called');
    this.logger.log(args);

    const joinedUser = await this.gameManagerUseCase.joinGame(args);

    this.dataLoaderCacheService.prime(this.userDataLoader, joinedUser);

    this.logger.log(joinedUser);

    return joinedUser;
  }

  @Mutation(() => User)
  async exitGame(@Args() args: ExitGameArgs): Promise<UserModel> {
    this.logger.log('exitGame called');
    this.logger.log(args);

    const exitedUser = await this.gameManagerUseCase.exitGame(args);

    this.dataLoaderCacheService.prime(this.userDataLoader, exitedUser);

    this.logger.log(exitedUser);

    return exitedUser;
  }

  @Mutation(() => Item)
  async pullGacha(@Args() args: PullGachaArgs): Promise<ItemModel> {
    this.logger.log('pullGacha called');
    this.logger.log(args);

    const pulledItem = await this.gachaManagerUseCase.pullGacha(args, (items) => items[Math.floor(Math.random() * items.length)]);

    this.itemDataLoaderCacheService.prime(this.itemDataLoader, pulledItem);

    this.logger.log(pulledItem);

    return pulledItem;
  }
}
