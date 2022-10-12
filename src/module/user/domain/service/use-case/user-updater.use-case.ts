import { User } from '../../model/user.model';
import { UpdateUserBioData } from './port/user-updater.input';

export interface UserUpdaterUseCaseInterface {
  updateUserBio(userId: string, updateUserData: UpdateUserBioData): Promise<User>;
}
