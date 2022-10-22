import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { InjectionToken } from '../common/constant/injection-token.constant';
import { getIdByAuthToken } from './util/get-id-by-auth-token.util';
import { FirebaseService } from '@/infra/firebase/firebase.service';
import { UserRepositoryInterface } from '~/user/domain/service/repository/user.repository';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly firebaseService: FirebaseService,
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async canActivate(context: ExecutionContext) {
    let authorization: string | undefined;
    context.getArgs().forEach((arg) => {
      if (arg && arg.req && arg.req.headers) {
        if (arg.req.headers.authorization) {
          authorization = arg.req.headers.authorization;
        }
      }
    });

    const authId = await getIdByAuthToken(this.firebaseService, authorization);
    if (!authId) {
      return false;
    }

    const user = await this.userRepository.findUnique({
      where: { authId },
    });
    if (user?.role !== Role.ADMIN) {
      return false;
    }

    return true;
  }
}
