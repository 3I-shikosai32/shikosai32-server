import { MiddlewareConsumer, Module } from '@nestjs/common';
import Components from '@/components';
import EnvModule from '@/config/environment/getter/getter.module';
import GraphQLConfig from '@/config/graphql/graphql.config';
import LoggerMiddleware from '@/config/logger/logger.middleware';
import LoggerModule from '@/config/logger/logger.module';
import FirebaseModule from '@/libs/firebase/firebase.module';
import PrismaModule from '@/libs/prisma/prisma.module';
import PubSubModule from '@/libs/pubsub/pubsub.module';

@Module({
  imports: [EnvModule, GraphQLConfig, LoggerModule, PrismaModule, FirebaseModule, PubSubModule, ...Components],
})
export default class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
