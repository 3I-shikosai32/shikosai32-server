import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { match } from 'ts-pattern';
import { EnvService } from '../env/env.service';
import { DataLoaderInterface } from '@/common/dataloader/dataloader.interface';
import { DataLoaderModule } from '@/common/dataloader/dataloader.module';
import { DataLoaderService } from '@/common/dataloader/dataloader.service';

const envService = new EnvService(new ConfigService());

export type GqlContext = {
  loader: DataLoaderInterface;
};

const gqlFactory =
  (apolloDriverConfig: ApolloDriverConfig) =>
  (dataloaderService: DataLoaderService): ApolloDriverConfig => ({
    ...apolloDriverConfig,
    context: (): GqlContext => ({
      loader: dataloaderService.getLoader(),
    }),
  });

const GraphQLConfigDevelopment = () =>
  GraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    imports: [DataLoaderModule],
    useFactory: gqlFactory({
      subscriptions: {
        'graphql-ws': true,
      },
      path: '/graphql',
      introspection: true,
      cache: 'bounded',
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      debug: true,
    }),
    inject: [DataLoaderService],
  });

export const GraphQLConfigProduction = () =>
  GraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    imports: [DataLoaderModule],
    useFactory: gqlFactory({
      apollo: envService.ApolloStudioConfig,
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      path: '/graphql',
      introspection: true,
      cache: 'bounded',
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    inject: [DataLoaderService],
  });

const GraphQLConfigTest = () =>
  GraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    imports: [DataLoaderModule],
    useFactory: gqlFactory({
      subscriptions: {
        'graphql-ws': true,
      },
      path: '/graphql',
      cache: 'bounded',
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      playground: false,
    }),
    inject: [DataLoaderService],
  });

export const GraphQLConfigModule = match(envService.NodeEnv)
  .with('development', () => GraphQLConfigDevelopment())
  .with('production', () => GraphQLConfigProduction())
  .with('test', () => GraphQLConfigTest())
  .otherwise(() => GraphQLConfigDevelopment());
