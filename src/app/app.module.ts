import { Module } from '@nestjs/common';
import Components from '../components';
import EnvModule from '../config/environment/getter/getter.module';
import GraphQLConfig from '../config/graphql/graphql.config';
import FirebaseModule from '../libs/firebase/firebase.module';
import PrismaModule from '../libs/prisma/prisma.module';

@Module({
  imports: [EnvModule, GraphQLConfig, PrismaModule, FirebaseModule, ...Components],
})
export default class AppModule {}
