import { User } from '../../model/user.model';
import { CreateUserArgs } from '~/user/controller/dto/args/create-user.args';

export interface UserCreatorUseCaseInterface {
  createUser(args: CreateUserArgs): Promise<User>;
}
