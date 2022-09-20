import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EnvModule } from '@/config/env/env.module';
import { GraphQLConfigModule } from '@/config/graphql/graphql-config.module';
import { LoggerMiddleware } from '@/config/logger/logger.middleware';
import { LoggerModule } from '@/config/logger/logger.module';
import { FirebaseModule } from '@/infra/firebase/firebase.module';
import { PrismaModule } from '@/infra/prisma/prisma.module';
import { PubSubModule } from '@/infra/pubsub/pubsub.module';
import { Modules } from '@/module';

@Module({
  imports: [EnvModule, GraphQLConfigModule, LoggerModule, PrismaModule, FirebaseModule, PubSubModule, ...Modules],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
