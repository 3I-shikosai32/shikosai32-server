import { Inject, Logger } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UserDataLoader } from '../dataloader/user.dataloader';
import { GameAttenders as GameAttendersModel } from '../domain/model/game-attenders.model';
import { ObtainmentStatus as ObtainmentStatusModel } from '../domain/model/obtainment-status.model';
import { Ranking as RankingModel } from '../domain/model/ranking.model';
import { User as UserModel } from '../domain/model/user.model';
import { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { FindUserArgs } from './dto/args/find-user.args';
import { FindUsersArgs } from './dto/args/find-users.args';
import { GetObtainmentStatusesArgs } from './dto/args/get-obtainment-statuses.args';
import { GetRankingPositionArgs } from './dto/args/get-ranking-position.args';
import { UpdatedRankingArgs } from './dto/args/updated-ranking.args';
import { RankingPeriod } from './dto/enum/date.enum';
import { GameAttenders } from './dto/object/game-attenders.object';
import { ObtainmentStatus } from './dto/object/obtainment-status.object';
import { Ranking } from './dto/object/ranking.object';
import { User } from './dto/object/user.object';
import { DataLoaderCacheService } from '@/cache/dataloader-cache.service';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { DateService } from '@/infra/date/date.service';

@Resolver()
export class UserQuery {
  private readonly logger = new Logger(UserQuery.name);

  constructor(
    @Inject(InjectionToken.USER_READER_USE_CASE)
    private readonly userReaderUseCase: UserReaderUseCaseInterface,
    private readonly userDataLoader: UserDataLoader,
    private readonly userDataLoaderCacheService: DataLoaderCacheService<UserModel, string>,
    private readonly dateService: DateService,
  ) {}

  @Query(() => User, { nullable: true })
  async findUser(@Args() args: FindUserArgs): Promise<UserModel | null> {
    this.logger.log('findUser called');
    this.logger.log(args);

    const foundUser = await this.userReaderUseCase.findUser(args.where.authId);

    if (foundUser) {
      this.userDataLoaderCacheService.prime(this.userDataLoader, foundUser);
    }

    return foundUser;
  }

  @Query(() => [User])
  async findUsers(@Args() args: FindUsersArgs): Promise<UserModel[]> {
    this.logger.log('findUsers called');
    this.logger.log(args);

    const foundUsers = await this.userReaderUseCase.findUsers(args.where, args.orderBy, args.cursor, args.take, args.skip);

    this.userDataLoaderCacheService.primeMany(this.userDataLoader, foundUsers);

    return foundUsers;
  }

  @Query(() => [ObtainmentStatus])
  async getObtainmentStatuses(@Args() args: GetObtainmentStatusesArgs): Promise<ObtainmentStatusModel[]> {
    this.logger.log('getObtainmentStatuses called');
    this.logger.log(args);

    const obtainmentStatuses = await this.userReaderUseCase.getObtainmentStatuses(args.where.authId);

    return obtainmentStatuses;
  }

  @Query(() => Int)
  async getRankingPosition(@Args() args: GetRankingPositionArgs): Promise<number> {
    this.logger.log('getRankingPosition called');
    this.logger.log(args);

    const isNowBeforeDay2 = this.dateService.isBeforeDay2(this.dateService.getNow());

    const rankingPosition = await this.userReaderUseCase.getRankingPosition(
      args.where.authId,
      isNowBeforeDay2 ? RankingPeriod.DAY1 : RankingPeriod.DAY2,
    );

    return rankingPosition;
  }

  @Query(() => [Ranking])
  async getRanking(@Args() args: UpdatedRankingArgs): Promise<RankingModel[]> {
    this.logger.log('getRanking called');
    this.logger.log(args);

    const foundRanking = await this.userReaderUseCase.getRanking(args.rankingTarget, args.date, 30);

    return foundRanking;
  }

  @Query(() => GameAttenders)
  async getGameAttenders(): Promise<GameAttendersModel> {
    this.logger.log('getGameAttenders called');

    const foundGameAttenders = await this.userReaderUseCase.getGameAttenders();

    return foundGameAttenders;
  }
}
