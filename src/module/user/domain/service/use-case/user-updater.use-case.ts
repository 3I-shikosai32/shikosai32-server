import { User } from '../../model/user.model';
import { UpdateUserArgs } from '~/user/controller/dto/args/update-user.args';

export interface UserUpdaterUseCaseInterface {
  updateUser(args: UpdateUserArgs): Promise<User>;
}
