import { User } from '../../model/user.model';
import { IncrementPointData, UpdateUserData } from './port/user-updater.input';

export interface UserUpdaterUseCaseInterface {
  updateUser(userId: string, updateUserData: UpdateUserData): Promise<User>;
  incrementPoint(incrementUsersData: IncrementPointData[], isBeforeDay2: boolean): Promise<User[]>;
}
