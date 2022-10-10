import { CharacterStatus } from '../../model/character-status.model';

export interface CharacterStatusDeliveryManagerUseCaseInterface {
  changeDeliveryStatus(characterStatusId: string, isDelivered: boolean): Promise<CharacterStatus>;
}
