import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { getIdByAuthToken } from './util/get-id-by-auth-token.util';
import { EnvService } from '@/config/env/env.service';
import { FirebaseService } from '@/infra/firebase/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly envService: EnvService, private readonly firebase: FirebaseService) {}

  async canActivate(context: ExecutionContext) {
    if (this.envService.NodeEnv === 'development') {
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

    const id = await getIdByAuthToken(this.firebase, authorization);

    return !!id;
  }
}
