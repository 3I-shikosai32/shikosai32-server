import { User } from '../../model/user.model';
import { UpdateUserData } from './port/user-updater.input';

export interface UserUpdaterUseCaseInterface {
  updateUserBio(userId: string, updateUserData: UpdateUserData): Promise<User>;
}
