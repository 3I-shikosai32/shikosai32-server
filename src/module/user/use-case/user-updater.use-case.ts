import { Inject, Injectable } from '@nestjs/common';
import { IncrementPointArgs } from '../controller/dto/args/increment-point.args';
import { UpdateUserArgs } from '../controller/dto/args/update-user.args';
import { UserInterface } from '../domain/service/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserUpdaterUseCaseInterface } from '../domain/service/use-case/user-updater.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class UserUpdaterUseCase implements UserUpdaterUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async updateUser(args: UpdateUserArgs) {
    const updatedUser = await this.userRepository.update(args);

    return updatedUser;
  }

  async incrementPoint(args: IncrementPointArgs, isBeforeDay2: boolean) {
    const updatedUsers = await Promise.all(
      args.users.map(async (arg) => {
        const foundUser = await this.userRepository.findUnique({
          where: { id: arg.id },
        });
        if (!foundUser) {
          throw new Error('User not found');
        }

        let updatedUser: UserInterface;
        if (isBeforeDay2) {
          updatedUser = await this.userRepository.update({
            where: { id: arg.id },
            data: {
              totalPointDay1: foundUser.totalPointDay1 + arg.increment,
              consumablePoint: foundUser.consumablePoint + arg.increment,
              pullableGachaTimes: foundUser.pullableGachaTimes + 1,
            },
          });
        } else {
          updatedUser = await this.userRepository.update({
            where: { id: arg.id },
            data: {
              totalPointDay2: foundUser.totalPointDay2 + arg.increment,
              consumablePoint: foundUser.consumablePoint + arg.increment,
              pullableGachaTimes: foundUser.pullableGachaTimes + 1,
            },
          });
        }

        return updatedUser;
      }),
    );

    return updatedUsers;
  }
}
