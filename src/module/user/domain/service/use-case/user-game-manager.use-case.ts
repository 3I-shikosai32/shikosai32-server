import { UserInterface } from '../model/user.model';
import { ExitGameArgs } from '~/user/controller/dto/args/exit-game.args';
import { JoinGameArgs } from '~/user/controller/dto/args/join-game.args';

export interface UserGameManagerUseCaseInterface {
  joinGame(args: JoinGameArgs): Promise<UserInterface>;
  exitGame(args: ExitGameArgs): Promise<UserInterface>;
}