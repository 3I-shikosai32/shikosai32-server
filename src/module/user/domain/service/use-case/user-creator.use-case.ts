import { User } from '../../model/user.model';
import { CreateUserData } from './port/user-creator.input';

export interface UserCreatorUseCaseInterface {
  createUser(createUserData: CreateUserData): Promise<User>;
}
