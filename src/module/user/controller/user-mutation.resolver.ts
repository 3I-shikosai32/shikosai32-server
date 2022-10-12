import { Inject, Logger, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserDataLoader } from '../dataloader/user.dataloader';
import { User as UserModel } from '../domain/model/user.model';
import { UserCreatorUseCaseInterface } from '../domain/service/use-case/user-creator.use-case';
import { UserGachaManagerUseCaseInterface } from '../domain/service/use-case/user-gacha-manager.use-case';
import { UserGameManagerUseCaseInterface } from '../domain/service/use-case/user-game-manager.use-case';
import { UserPublisherUseCaseInterface } from '../domain/service/use-case/user-publisher.ues-case';
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
import { AuthGuard } from '@/guard/auth.guard';
import { RoleGuard } from '@/guard/role.guard';
import { DateService } from '@/infra/date/date.service';
import { FirebaseService } from '@/infra/firebase/firebase.service';
import { CharacterStatusReaderUseCaseInterface } from '~/character-status/domain/service/use-case/character-status-reader.use-case';
import { Item } from '~/item/controller/dto/object/item.object';
import { ItemDataLoader } from '~/item/dataloader/item.dataloader';
import { Item as ItemModel } from '~/item/domain/model/item.model';

@Resolver()
@UseGuards(AuthGuard)
export class UserMutation {
  private readonly logger = new Logger(UserMutation.name);

  constructor(
    @Inject(InjectionToken.USER_CREATOR_USE_CASE)
    private readonly userCreatorUseCase: UserCreatorUseCaseInterface,
    @Inject(InjectionToken.USER_UPDATER_USE_CASE)
    private readonly userUpdaterUseCase: UserUpdaterUseCaseInterface,
    @Inject(InjectionToken.USER_GAME_MANAGER_USE_CASE)
    private readonly userGameManagerUseCase: UserGameManagerUseCaseInterface,
    @Inject(InjectionToken.USER_GACHA_MANAGER_USE_CASE)
    private readonly userGachaManagerUseCase: UserGachaManagerUseCaseInterface,
    @Inject(InjectionToken.USER_PUBLISHER_USE_CASE)
    private readonly userPublisherUseCase: UserPublisherUseCaseInterface,
    @Inject(InjectionToken.CHARACTER_STATUS_READER_USE_CASE)
    private readonly characterStatusReaderUseCase: CharacterStatusReaderUseCaseInterface,
    private readonly userDataLoader: UserDataLoader,
    private readonly dataLoaderCacheService: DataLoaderCacheService<UserModel, string>,
    private readonly itemDataLoader: ItemDataLoader,
    private readonly itemDataLoaderCacheService: DataLoaderCacheService<ItemModel, string>,
    private readonly firebaseService: FirebaseService,
    private readonly dateService: DateService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args() args: CreateUserArgs): Promise<UserModel> {
    this.logger.log('createUser called');
    this.logger.log(args);

    const createdUser = await this.userCreatorUseCase.createUser(args.data);

    this.dataLoaderCacheService.prime(this.userDataLoader, createdUser);

    await this.firebaseService.adminAuth.updateUser(createdUser.id, { displayName: createdUser.name, email: createdUser.email });

    return createdUser;
  }

  @Mutation(() => User)
  async updateUser(@Args() args: UpdateUserArgs): Promise<UserModel> {
    this.logger.log('updateUser called');
    this.logger.log(args);

    const updatedUser = await this.userUpdaterUseCase.updateUser(args.where.id, args.data);

    this.dataLoaderCacheService.prime(this.userDataLoader, updatedUser);

    await this.firebaseService.adminAuth.updateUser(updatedUser.id, { displayName: updatedUser.name, email: updatedUser.email });

    return updatedUser;
  }

  @Mutation(() => [User])
  @UseGuards(RoleGuard)
  async incrementPoint(@Args() args: IncrementPointArgs): Promise<UserModel[]> {
    this.logger.log('incrementPoint called');
    this.logger.log(args);

    const isNowBeforeDay2 = this.dateService.isBeforeDay2(this.dateService.getNow());

    const incrementedUsers = await this.userGameManagerUseCase.incrementPoint(args.users, isNowBeforeDay2);

    this.dataLoaderCacheService.primeMany(this.userDataLoader, incrementedUsers);

    await this.publisherUseCase.publishUpdatedGameAttenders();

    const changedCharacters = await this.characterStatusReaderUseCase.findIncludeCharacterFromUserIds(incrementedUsers.map((user) => user.id));
    await Promise.all(changedCharacters.map((character) => this.publisherUseCase.publishRanking(character, isNowBeforeDay2)));

    return incrementedUsers;
  }

  @Mutation(() => User)
  async joinGame(@Args() args: JoinGameArgs): Promise<UserModel> {
    this.logger.log('joinGame called');
    this.logger.log(args);

    const joinedUser = await this.userGameManagerUseCase.joinGame(args.where.id, args.game);

    this.dataLoaderCacheService.prime(this.userDataLoader, joinedUser);

    await this.publisherUseCase.publishUpdatedGameAttenders();

    return joinedUser;
  }

  @Mutation(() => User)
  async exitGame(@Args() args: ExitGameArgs): Promise<UserModel> {
    this.logger.log('exitGame called');
    this.logger.log(args);

    const exitedUser = await this.userGameManagerUseCase.exitGame(args.where.id);

    this.dataLoaderCacheService.prime(this.userDataLoader, exitedUser);

    await this.publisherUseCase.publishUpdatedGameAttenders();

    return exitedUser;
  }

  @Mutation(() => Item)
  async pullGacha(@Args() args: PullGachaArgs): Promise<ItemModel> {
    this.logger.log('pullGacha called');
    this.logger.log(args);

    const pulledItem = await this.userGachaManagerUseCase.pullGacha(args.where.id, (items) => items[Math.floor(Math.random() * items.length)]);

    this.itemDataLoaderCacheService.prime(this.itemDataLoader, pulledItem);

    return pulledItem;
  }
}
