import { CharacterStatus } from '../../model/character-status.model';

export interface CharacterStatusDeliveryManagerUseCaseInterface {
  changeDeliveryState(characterStatusId: string, isDelivered: boolean): Promise<CharacterStatus>;
}
