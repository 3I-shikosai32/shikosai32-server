import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserCharacterStatusDataLoader } from '../dataloader/user-character-status.dataloader';
import { UserGiftHistoriesDataLoader } from '../dataloader/user-gift-histories.dataloader';
import { User as UserModel } from '../domain/model/user.model';
import { User } from './dto/object/user.object';
import { CharacterStatus } from '~/character-status/controller/dto/object/character-status.object';
import { CharacterStatus as CharacterStatusModel } from '~/character-status/domain/model/character-status.model';
import { GiftHistory } from '~/gift-history/controller/dto/object/gift-history.object';
import { GiftHistory as GiftHistoryModel } from '~/gift-history/domain/model/gift-history.model';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userCharacterStatusDataLoader: UserCharacterStatusDataLoader,
    private readonly userGiftHistoriesDataLoader: UserGiftHistoriesDataLoader,
  ) {}

  @ResolveField(() => CharacterStatus)
  async characterStatus(@Parent() user: UserModel): Promise<CharacterStatusModel> {
    const characterStatus = await this.userCharacterStatusDataLoader.load(user.id);

    return characterStatus;
  }

  @ResolveField(() => [GiftHistory])
  async giftHistories(@Parent() user: UserModel): Promise<GiftHistoryModel[]> {
    const giftHistories = await this.userGiftHistoriesDataLoader.load(user.id);

    return giftHistories;
  }
}
