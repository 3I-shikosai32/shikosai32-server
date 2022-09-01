import { Module } from '@nestjs/common';
import UserMutation from './user.resolver.mutation';
import UserQuery from './user.resolver.query';
import UserSubscription from './user.resolver.subscription';
import UserService from './user.service';

@Module({
  providers: [UserService, UserQuery, UserMutation, UserSubscription],
})
export default class UserModule {}
