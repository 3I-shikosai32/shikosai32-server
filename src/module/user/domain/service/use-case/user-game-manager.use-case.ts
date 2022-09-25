import { User } from '../../model/user.model';
import { ExitGameArgs } from '~/user/controller/dto/args/exit-game.args';
import { IncrementPointArgs } from '~/user/controller/dto/args/increment-point.args';
import { JoinGameArgs } from '~/user/controller/dto/args/join-game.args';

export interface UserGameManagerUseCaseInterface {
  incrementPoint(args: IncrementPointArgs, isBeforeDay2: boolean): Promise<User[]>;
  joinGame(args: JoinGameArgs): Promise<User>;
  exitGame(args: ExitGameArgs): Promise<User>;
}
