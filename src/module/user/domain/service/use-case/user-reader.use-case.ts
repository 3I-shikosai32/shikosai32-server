import { User } from '../../model/user.model';
import { FindUserArgs } from '~/user/controller/dto/args/find-user.args';
import { FindUsersArgs } from '~/user/controller/dto/args/find-users.args';

export interface UserReaderUseCaseInterface {
  findUser(args: FindUserArgs): Promise<User | null>;
  findUsers(args: FindUsersArgs): Promise<User[]>;
}
