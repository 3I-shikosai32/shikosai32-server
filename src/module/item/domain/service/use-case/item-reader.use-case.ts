import { User } from '~/user/domain/model/user.model';

export interface ItemReaderUseCaseInterface {
  findUsersByItemId(id: string): Promise<User[]>;
}
