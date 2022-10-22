import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { CreateUserData } from '../domain/service/use-case/port/user-creator.input';
import { UserCreatorUseCaseInterface } from '../domain/service/use-case/user-creator.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { EnvService } from '@/config/env/env.service';
import { ItemRepositoryInterface } from '~/item/domain/service/repository/item.repository';

@Injectable()
export class UserCreatorUseCase implements UserCreatorUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.ITEM_REPOSITORY)
    private readonly itemRepository: ItemRepositoryInterface,
    private readonly envService: EnvService,
  ) {}

  async createUser(createUserData: CreateUserData) {
    const foundItems = await this.itemRepository.findMany({
      where: {
        character: createUserData.character,
      },
    });

    const iconPath = `${encodeURIComponent(`sys/character/${createUserData.character.toLowerCase()}/`)}icon.svg?alt=media`;
    const avatarPath = `${encodeURIComponent(`sys/character/${createUserData.character.toLowerCase()}/`)}base.svg?alt=media`;

    const createdUser = await this.userRepository.create({
      data: {
        name: createUserData.name,
        email: createUserData.email,
        role: createUserData.role,
        authId: createUserData.authId,
        characterStatuses: {
          create: {
            character: createUserData.character,
            iconUrl: `${this.envService.FirebaseStorageUrl}${iconPath}`,
            avatarUrl: `${this.envService.FirebaseStorageUrl}${avatarPath}`,
            isActive: true,
            itemIds: foundItems.map((item) => item.id),
            items: {
              connect: foundItems.map((item) => ({ id: item.id })),
            },
          },
        },
      },
    });

    return createdUser;
  }
}
