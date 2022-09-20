import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
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
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { AuthGuard } from '@/common/guard/auth.guard';
import { RoleGuard } from '@/common/guard/role.guard';
import { Item } from '~/item/controller/dto/object/item.object';

@Resolver()
@UseGuards(AuthGuard)
export class UserMutation {
  constructor(
    @Inject(InjectionToken.USER_CREATOR_USE_CASE)
    private readonly creatorUseCase: UserCreatorUseCaseInterface,
    @Inject(InjectionToken.USER_UPDATER_USE_CASE)
    private readonly updaterUseCase: UserUpdaterUseCaseInterface,
    @Inject(InjectionToken.USER_GAME_MANAGER_USE_CASE)
    private readonly gameManagerUseCase: UserGameManagerUseCaseInterface,
    @Inject(InjectionToken.USER_GACHA_MANAGER_USE_CASE)
    private readonly gachaManagerUseCase: UserGachaManagerUseCaseInterface,
  ) {}

  @Mutation(() => User)
  async createUser(@Args() args: CreateUserArgs): Promise<User> {
    const createdUser = await this.creatorUseCase.createUser(args);

    return createdUser;
  }

  @Mutation(() => User)
  async updateUser(@Args() args: UpdateUserArgs): Promise<User> {
    const updatedUser = await this.updaterUseCase.updateUser(args);

    return updatedUser;
  }

  @Mutation(() => [User])
  @UseGuards(RoleGuard)
  async incrementPoint(@Args() args: IncrementPointArgs): Promise<User[]> {
    const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    const isBeforeDay2 = now <= new Date('2022-10-22');

    const incrementedUser = await this.updaterUseCase.incrementPoint(args, isBeforeDay2);

    return incrementedUser;
  }

  @Mutation(() => User)
  async joinGame(@Args() args: JoinGameArgs): Promise<User> {
    const joinedUser = await this.gameManagerUseCase.joinGame(args);

    return joinedUser;
  }

  @Mutation(() => User)
  async exitGame(@Args() args: ExitGameArgs): Promise<User> {
    const exitedUser = await this.gameManagerUseCase.exitGame(args);

    return exitedUser;
  }

  @Mutation(() => Item)
  async pullGacha(@Args() args: PullGachaArgs): Promise<Item> {
    const pulledItem = await this.gachaManagerUseCase.pullGacha(args, (items) => items[Math.floor(Math.random() * items.length)]);

    return pulledItem;
  }
}
