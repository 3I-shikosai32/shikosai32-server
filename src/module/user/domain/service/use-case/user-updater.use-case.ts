import { User } from '../../model/user.model';
import { UpdateUserData } from './port/user-updater.input';

export interface UserUpdaterUseCaseInterface {
  updateUser(userId: string, updateUserData: UpdateUserData): Promise<User>;
}
