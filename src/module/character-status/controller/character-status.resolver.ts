import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { match, P } from 'ts-pattern';
import { CharacterStatus as CharacterStatusModel } from '../domain/model/character-status.model';
import { CharacterStatus } from './dto/object/character-status.object';
import { Item } from '~/item/controller/dto/object/item.object';
import { ItemDataLoader } from '~/item/dataloader/item.dataloader';
import { Item as ItemModel } from '~/item/domain/model/item.model';
import { User } from '~/user/controller/dto/object/user.object';
import { UserDataLoader } from '~/user/dataloader/user.dataloader';
import { User as UserModel } from '~/user/domain/model/user.model';

@Resolver(() => CharacterStatus)
export class CharacterStatusResolver {
  constructor(private readonly userDataLoader: UserDataLoader, private readonly itemDataLoader: ItemDataLoader) {}

  @ResolveField(() => User)
  async user(@Parent() characterStatus: CharacterStatusModel): Promise<UserModel> {
    const user = await this.userDataLoader.load(characterStatus.userId);

    return user;
  }

  @ResolveField(() => [Item])
  async items(@Parent() characterStatus: CharacterStatusModel): Promise<ItemModel[]> {
    const itemsOrErrors = await this.itemDataLoader.loadMany(characterStatus.itemIds);

    const items = match(itemsOrErrors)
      .with(P.array(P.instanceOf(Error)), (errors) => {
        throw errors;
      })
      .with(P.array(P.instanceOf(ItemModel)), (matchedItems) => matchedItems)
      .otherwise(() => {
        throw new Error('Unexpected error');
      });

    return items;
  }
}
