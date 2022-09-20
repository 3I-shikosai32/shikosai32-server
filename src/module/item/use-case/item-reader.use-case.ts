import { Inject, Injectable } from '@nestjs/common';
import { ItemRepositoryInterface } from '../domain/service/repository/item.repository';
import { ItemReaderUseCaseInterface } from '../domain/service/use-case/item-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class ItemReaderUseCase implements ItemReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.ITEM_REPOSITORY)
    private readonly itemRepository: ItemRepositoryInterface,
  ) {}

  async findUsersByItemId(id: string) {
    const foundUsers = await this.itemRepository.findUsersByItemId({
      where: { id },
    });

    return foundUsers;
  }
}
