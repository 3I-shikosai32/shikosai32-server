import { Inject } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Item as ItemModel } from '../domain/model/item.model';
import { ItemReaderUseCaseInterface } from '../domain/service/use-case/item-reader.use-case';
import { Item } from './dto/object/item.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { User } from '~/user/controller/dto/object/user.object';
import { User as UserModel } from '~/user/domain/model/user.model';

@Resolver(() => Item)
export class ItemResolver {
  constructor(
    @Inject(InjectionToken.ITEM_READER_USE_CASE)
    private readonly readerUseCase: ItemReaderUseCaseInterface,
  ) {}

  @ResolveField(() => [User])
  async users(@Parent() item: ItemModel): Promise<UserModel[]> {
    const users = await this.readerUseCase.findUsersByItemId(item.id);

    return users;
  }
}
