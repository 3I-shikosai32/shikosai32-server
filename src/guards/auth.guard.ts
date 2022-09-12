import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import Env from '@/config/environment/getter/getter.service';
import FirebaseService from '@/libs/firebase/firebase.service';

const validateAuthorization = async (firebase: FirebaseService, authorization: string | undefined) => {
  if (!authorization) {
    return false;
  }

  const decodedToken = await firebase.adminAuth.verifyIdToken(authorization);

  return !!decodedToken;
};

@Injectable()
export default class AuthGuard implements CanActivate {
  constructor(private env: Env, private firebase: FirebaseService) {}

  async canActivate(context: ExecutionContext) {
    if (this.env.NodeEnv === 'development') {
      return true;
    }

    let authorization: string | undefined;
    context.getArgs().forEach((arg) => {
      if (arg && arg.req && arg.req.headers) {
        if (arg.req.headers.authorization) {
          authorization = arg.req.headers.authorization;
        }
      }
    });

    const isValid = await validateAuthorization(this.firebase, authorization);

    return isValid;
  }
}
