import { Inject, Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { CharacterStatus } from '../../character-status/domain/model/character-status.model';
import { RankingPeriod } from '../controller/dto/enum/date.enum';
import { RankingTarget } from '../controller/dto/enum/ranking-target.enum';
import { GameAttenders } from '../domain/model/game-attenders.model';
import { ObtainmentStatus } from '../domain/model/obtainment-status.model';
import { Ranking } from '../domain/model/ranking.model';
import { User } from '../domain/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserCursor, UserOrderBy, UserWhere } from '../domain/service/use-case/port/user-reader.input';
import { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { CharacterStatusRepositoryInterface } from '~/character-status/domain/service/repository/character-status.repository';
import { ItemRepositoryInterface } from '~/item/domain/service/repository/item.repository';

@Injectable()
export class UserReaderUseCase implements UserReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.CHARACTER_STATUS_REPOSITORY)
    private readonly characterStatusRepository: CharacterStatusRepositoryInterface,
    @Inject(InjectionToken.ITEM_REPOSITORY)
    private readonly itemRepository: ItemRepositoryInterface,
  ) {}

  async findUser(userId: string) {
    const foundUser = await this.userRepository.findUnique({
      where: { id: userId },
    });

    return foundUser;
  }

  async findUsers(where?: UserWhere, orderBy?: UserOrderBy[], cursor?: UserCursor, take?: number, skip?: number) {
    const foundUsers = await this.userRepository.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
    });

    return foundUsers;
  }

  async getObtainmentStatuses(userId: string) {
    const foundUser = await this.userRepository.findUnique({
      where: { id: userId },
    });
    if (!foundUser) {
      throw new Error('User not found');
    }

    const foundCharacterStatus = await this.characterStatusRepository.findActiveByUserId(userId);
    if (!foundCharacterStatus) {
      throw new Error('Character status not found');
    }

    const foundItems = await this.itemRepository.findMany({
      where: {
        character: { equals: foundCharacterStatus.character },
      },
    });

    const obtainmentStatuses = foundItems.map((item) => ({
      item,
      obtained: foundCharacterStatus.itemIds.includes(item.id),
    }));

    return obtainmentStatuses.map((obtainmentStatus) => new ObtainmentStatus(obtainmentStatus));
  }

  async getRankingPosition(userId: string, date: RankingPeriod) {
    const foundUser = await this.userRepository.findUnique({
      where: { id: userId },
    });
    if (!foundUser) {
      throw new Error('User not found');
    }

    const foundRanking = await this.getRanking(RankingTarget.TOTAL, date);
    const foundRankingPosition = foundRanking.findIndex((ranking) => ranking.user.id === userId) + 1;

    return foundRankingPosition;
  }

  async getRanking(rankingTarget: RankingTarget, date: RankingPeriod, take?: number) {
    let foundUsers: User[];
    let foundCharacterStatusWithUserList: [CharacterStatus, User][];
    let foundRanking: Ranking[];
    switch (rankingTarget) {
      case RankingTarget.TOTAL:
        if (date === RankingPeriod.DAY1) {
          foundUsers = await this.userRepository.findMany({
            orderBy: [
              {
                totalPointDay1: 'desc',
              },
            ],
            take,
          });
        } else {
          foundUsers = await this.userRepository.findMany({
            orderBy: [
              {
                totalPointDay2: 'desc',
              },
            ],
            take,
          });
        }

        foundRanking = foundUsers.map((user) => {
          const ranking = new Ranking({
            user,
            point: date === RankingPeriod.DAY1 ? user.totalPointDay1 : user.totalPointDay2,
          });

          return ranking;
        });

        break;
      default:
        if (date === RankingPeriod.DAY1) {
          foundCharacterStatusWithUserList = await this.characterStatusRepository.findManyWithUser({
            where: {
              character: rankingTarget,
            },
            orderBy: [
              {
                characterPointDay1: 'desc',
              },
            ],
            take,
          });
        } else {
          foundCharacterStatusWithUserList = await this.characterStatusRepository.findManyWithUser({
            where: {
              character: rankingTarget,
            },
            orderBy: [
              {
                characterPointDay2: 'desc',
              },
            ],
            take,
          });
        }

        foundRanking = foundCharacterStatusWithUserList.map(([characterStatus, user]) => {
          const ranking = new Ranking({
            user,
            point: date === RankingPeriod.DAY1 ? characterStatus.characterPointDay1 : characterStatus.characterPointDay2,
          });

          return ranking;
        });

        break;
    }

    return foundRanking;
  }

  async getGameAttenders() {
    const gameAttenders = await this.userRepository.findMany({
      where: {
        participateGame: { not: Game.NONE },
      },
    });

    const foundGameAttenders = {
      xeno: gameAttenders.filter((user) => user.participateGame === Game.XENO),
      coinDropping: gameAttenders.filter((user) => user.participateGame === Game.COIN_DROPPING),
      iceRaze: gameAttenders.filter((user) => user.participateGame === Game.ICE_RAZE),
      president: gameAttenders.filter((user) => user.participateGame === Game.PRESIDENT),
      poker: gameAttenders.filter((user) => user.participateGame === Game.POKER),
      weDidntPlaytest: gameAttenders.filter((user) => user.participateGame === Game.WE_DIDNT_PLAYTEST),
    };

    return new GameAttenders(foundGameAttenders);
  }
}
