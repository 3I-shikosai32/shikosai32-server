import { Inject } from '@nestjs/common';
import { BaseDataLoader } from '../base.dataloader';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { User } from '~/user/domain/model/user.model';
import { UserRepositoryInterface } from '~/user/domain/service/repository/user.repository';

export class GiftHistoryUserDataLoader extends BaseDataLoader<string, User> {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {
    super();
  }

  protected async batchLoad(keys: string[]): Promise<(User | Error)[]> {
    const users = await this.userRepository.findMany({
      where: {
        id: { in: keys },
      },
    });

    return users;
  }
}
