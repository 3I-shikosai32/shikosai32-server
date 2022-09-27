import { Game } from '@prisma/client';
import { User } from '../../model/user.model';

export interface UserGameManagerUseCaseInterface {
  joinGame(userId: string, game: Game): Promise<User>;
  exitGame(userId: string): Promise<User>;
}
