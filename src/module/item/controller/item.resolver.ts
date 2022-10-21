import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { match, P } from 'ts-pattern';
import { Item as ItemModel } from '../domain/model/item.model';
import { Item } from './dto/object/item.object';
import { User } from '~/user/controller/dto/object/user.object';
import { UserDataLoader } from '~/user/dataloader/user.dataloader';
import { User as UserModel } from '~/user/domain/model/user.model';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly userDataLoader: UserDataLoader) {}

  @ResolveField(() => [User])
  async users(@Parent() item: ItemModel): Promise<UserModel[]> {
    if (item.characterStatusIds.length === 0) {
      return [];
    }

    const usersOrErrors = await this.userDataLoader.loadMany(item.characterStatusIds);

    const users = match(usersOrErrors)
      .with(P.array(P.instanceOf(Error)), (errors) => {
        throw errors;
      })
      .with(P.array(P.instanceOf(UserModel)), (matchedUsers) => matchedUsers)
      .otherwise(() => {
        throw new Error('Unexpected error');
      });

    return users;
  }
}
