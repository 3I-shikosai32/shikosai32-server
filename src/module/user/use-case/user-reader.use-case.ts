import { Inject, Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { Date } from '../controller/dto/enum/date.enum';
import { RankingTarget } from '../controller/dto/enum/ranking-target.enum';
import { GameAttenders } from '../domain/model/game-attenders.model';
import { ObtainmentStatus } from '../domain/model/obtainment-status.model';
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

  async getRankingPosition(userId: string) {
    const foundUser = await this.userRepository.findUnique({
      where: { id: userId },
    });
    if (!foundUser) {
      throw new Error('User not found');
    }

    const foundRanking = await this.getRanking(RankingTarget.TOTAL, Date.DAY1);
    const foundRankingPosition = foundRanking.findIndex((user) => user.id === userId) + 1;

    return foundRankingPosition;
  }

  async getRanking(rankingTarget: RankingTarget, date: Date, take?: number) {
    let foundRanking: User[];
    switch (rankingTarget) {
      case RankingTarget.TOTAL:
        if (date === Date.DAY1) {
          foundRanking = await this.userRepository.findMany({
            orderBy: [
              {
                totalPointDay1: 'desc',
              },
            ],
            take,
          });
        } else {
          foundRanking = await this.userRepository.findMany({
            orderBy: [
              {
                totalPointDay2: 'desc',
              },
            ],
            take,
          });
        }
        break;
      default:
        if (date === Date.DAY1) {
          foundRanking = (
            await this.characterStatusRepository.findManyWithUser({
              where: {
                character: rankingTarget,
              },
              orderBy: [
                {
                  characterPointDay1: 'desc',
                },
              ],
              take,
            })
          ).map(([, user]) => user);
        } else {
          foundRanking = (
            await this.characterStatusRepository.findManyWithUser({
              where: {
                character: rankingTarget,
              },
              orderBy: [
                {
                  characterPointDay2: 'desc',
                },
              ],
              take,
            })
          ).map(([, user]) => user);
        }
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
      coin_dropping: gameAttenders.filter((user) => user.participateGame === Game.COIN_DROPPING),
      ice_raze: gameAttenders.filter((user) => user.participateGame === Game.ICE_RAZE),
      president: gameAttenders.filter((user) => user.participateGame === Game.PRESIDENT),
      poker: gameAttenders.filter((user) => user.participateGame === Game.POKER),
      we_didnt_playtest: gameAttenders.filter((user) => user.participateGame === Game.WE_DIDNT_PLAYTEST),
    };

    return new GameAttenders(foundGameAttenders);
  }
}
