import { UserInterface } from '../model/user.model';
import { IncrementPointArgs } from '~/user/controller/dto/args/increment-point.args';
import { UpdateUserArgs } from '~/user/controller/dto/args/update-user.args';

export interface UserUpdaterUseCaseInterface {
  updateUser(args: UpdateUserArgs): Promise<UserInterface>;
  incrementPoint(args: IncrementPointArgs, isBeforeDay2: boolean): Promise<UserInterface[]>;
}
