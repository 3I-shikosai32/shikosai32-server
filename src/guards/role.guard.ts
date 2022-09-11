import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Role } from '@prisma/client';
import UserService from '@/components/user/user.service';
import FirebaseService from '@/libs/firebase/firebase.service';

const getIdByToken = async (firebase: FirebaseService, authorization: string | undefined) => {
  if (!authorization) {
    return null;
  }

  const decodedToken = await firebase.adminAuth.verifyIdToken(authorization);

  return decodedToken.uid;
};

@Injectable()
export default class RoleGuard implements CanActivate {
  constructor(private firebase: FirebaseService, private userService: UserService) {}

  async canActivate(context: ExecutionContext) {
    let authorization: string | undefined;
    context.getArgs().forEach((arg) => {
      if (arg && arg.req && arg.req.headers) {
        if (arg.req.headers.authorization) {
          authorization = arg.req.headers.authorization;
        }
      }
    });

    const id = await getIdByToken(this.firebase, authorization);
    if (!id) {
      return false;
    }

    const user = await this.userService.findUnique({
      where: { id },
    });
    if (user?.role !== Role.ADMIN) {
      return false;
    }

    return true;
  }
}
