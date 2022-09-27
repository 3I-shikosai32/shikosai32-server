import { Game } from '@prisma/client';
import { User } from '../../model/user.model';
import { IncrementPointData } from './port/user-game-manager.input';

export interface UserGameManagerUseCaseInterface {
  incrementPoint(incrementUsersData: IncrementPointData[], isBeforeDay2: boolean): Promise<User[]>;
  joinGame(userId: string, game: Game): Promise<User>;
  exitGame(userId: string): Promise<User>;
}
