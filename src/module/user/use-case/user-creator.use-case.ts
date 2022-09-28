import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { CreateUserData } from '../domain/service/use-case/port/user-creator.input';
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

  async createUser(createUserData: CreateUserData) {
    const foundItems = await this.itemRepository.findMany({
      where: {
        character: createUserData.character,
      },
    });

    const createdUser = await this.userRepository.create({
      data: {
        ...createUserData,
        itemIds: foundItems.map((item) => item.id),
        items: {
          connect: foundItems.map((item) => ({ id: item.id })),
        },
      },
    });

    return createdUser;
  }
}
