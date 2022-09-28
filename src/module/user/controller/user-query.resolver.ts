import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserDataLoader } from '../dataloader/user.dataloader';
import { ObtainmentStatus as ObtainmentStatusModel } from '../domain/model/obtainment-status.model';
import { User as UserModel } from '../domain/model/user.model';
import { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { FindUserArgs } from './dto/args/find-user.args';
import { FindUsersArgs } from './dto/args/find-users.args';
import { GetObtainmentStatusesArgs } from './dto/args/get-obtainment-statuses.args';
import { ObtainmentStatus } from './dto/object/obtainment-status.object';
import { User } from './dto/object/user.object';
import { DataLoaderCacheService } from '@/cache/dataloader-cache.service';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class UserQuery {
  private readonly logger = new Logger(UserQuery.name);

  constructor(
    @Inject(InjectionToken.USER_READER_USE_CASE)
    private readonly readerUseCase: UserReaderUseCaseInterface,
    private readonly userDataLoader: UserDataLoader,
    private readonly userDataLoaderCacheService: DataLoaderCacheService<UserModel, string>,
  ) {}

  @Query(() => User, { nullable: true })
  async findUser(@Args() args: FindUserArgs): Promise<UserModel | null> {
    this.logger.log('findUser called');
    this.logger.log(args);

    const foundUser = await this.readerUseCase.findUser(args.where.id);

    if (foundUser) {
      this.userDataLoaderCacheService.prime(this.userDataLoader, foundUser);
    }

    this.logger.log(foundUser);

    return foundUser;
  }

  @Query(() => [User])
  async findUsers(@Args() args: FindUsersArgs): Promise<UserModel[]> {
    this.logger.log('findUsers called');
    this.logger.log(args);

    const foundUsers = await this.readerUseCase.findUsers(args.where, args.orderBy, args.cursor, args.take, args.skip);

    this.userDataLoaderCacheService.primeMany(this.userDataLoader, foundUsers);

    return foundUsers;
  }

  @Query(() => [ObtainmentStatus])
  async getObtainmentStatuses(@Args() args: GetObtainmentStatusesArgs): Promise<ObtainmentStatusModel[]> {
    this.logger.log('getObtainmentStatuses called');
    this.logger.log(args);

    const obtainmentStatuses = await this.readerUseCase.getObtainmentStatuses(args.where.id);

    return obtainmentStatuses;
  }
}
