import { GameAttenders } from '../../model/game-attenders.model';

export interface UserPublisherUseCaseInterface {
  publishUpdatedGameAttenders(): Promise<GameAttenders>;
}
