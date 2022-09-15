import { UserInterface } from '../model/user.model';
import { FindUserArgs } from '~/user/controller/dto/args/find-user.args';
import { FindUsersArgs } from '~/user/controller/dto/args/find-users.args';

export interface UserReaderUseCaseInterface {
  findUser(args: FindUserArgs): Promise<UserInterface | null>;
  findUsers(args: FindUsersArgs): Promise<UserInterface[]>;
}
