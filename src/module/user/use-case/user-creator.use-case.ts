import { Inject, Injectable } from '@nestjs/common';
import { CreateUserArgs } from '../controller/dto/args/create-user.args';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserCreatorUseCaseInterface } from '../domain/service/use-case/user-creator.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { ItemRepositoryInterface } from '~/item/domain/service/repository/item.repository';

@Injectable()
export class UserCreatorUseCase implements UserCreatorUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.ITEM_REPOSITORY)
    private readonly itemRepository: ItemRepositoryInterface,
  ) {}

  async createUser(args: CreateUserArgs) {
    const foundItems = await this.itemRepository.findMany({
      where: {
        character: args.data.character,
      },
    });

    const createdUser = await this.userRepository.create({
      data: {
        ...args.data,
        itemIds: foundItems.map((item) => item.id),
        items: {
          connect: foundItems.map((item) => ({ id: item.id })),
        },
        giftHistories: {
          create: args.data.giftHistories,
        },
      },
    });

    return createdUser;
  }
}
