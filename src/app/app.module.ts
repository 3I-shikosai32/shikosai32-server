import { Module } from '@nestjs/common';
import { CacheModule } from '@/cache/cache.module';
import { EnvModule } from '@/config/env/env.module';
import { GraphQLConfigModule } from '@/config/graphql/graphql-config.module';
import { FirebaseModule } from '@/infra/firebase/firebase.module';
import { PrismaModule } from '@/infra/prisma/prisma.module';
import { PubSubModule } from '@/infra/pubsub/pubsub.module';
import { Modules } from '@/module';

@Module({
  imports: [EnvModule, GraphQLConfigModule, PrismaModule, FirebaseModule, PubSubModule, CacheModule, ...Modules],
})
export class AppModule {}
