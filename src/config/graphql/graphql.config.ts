import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { match } from 'ts-pattern';
import Env from '../environment/getter/getter.service';

const env = new Env(new ConfigService());

const GraphQLConfigDevelopment = () =>
  GraphQLModule.forRoot<ApolloDriverConfig>({
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
    debug: true,
  });

export const GraphQLConfigProduction = () =>
  GraphQLModule.forRoot<ApolloDriverConfig>({
    apollo: env.ApolloStudioConfig,
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
  });

const GraphQLConfigTest = () =>
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    subscriptions: {
      'graphql-ws': true,
    },
    path: '/graphql',
    cache: 'bounded',
    autoSchemaFile: join(process.cwd(), './schema.gql'),
    playground: false,
  });

const GraphQLConfig = match(env.NodeEnv)
  .with('development', () => GraphQLConfigDevelopment())
  .with('production', () => GraphQLConfigProduction())
  .with('test', () => GraphQLConfigTest())
  .otherwise(() => GraphQLConfigDevelopment());

export default GraphQLConfig;
