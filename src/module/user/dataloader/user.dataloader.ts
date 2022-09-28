import { Inject, Injectable, Scope } from '@nestjs/common';
import { BaseDataLoader } from '@/common/base/dataloader/base.dataloader';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { User } from '~/user/domain/model/user.model';
import { UserRepositoryInterface } from '~/user/domain/service/repository/user.repository';

@Injectable({ scope: Scope.REQUEST })
export class UserDataLoader extends BaseDataLoader<string, User> {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {
    super();
  }

  protected async batchLoad(userIds: string[]): Promise<(User | Error)[]> {
    const users = await this.userRepository.findMany({
      where: {
        id: { in: userIds },
      },
    });

    const mappedUsers = userIds.map((userId) => {
      const user = users.find((u) => u.id === userId);

      return user || new Error(`User with id ${userId} not found`);
    });

    return mappedUsers;
  }
}
