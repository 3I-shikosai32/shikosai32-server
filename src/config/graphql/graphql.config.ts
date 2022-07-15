import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { Request } from 'express';
import { match } from 'ts-pattern';
import Env from '../environment/getter/getter.service';

const env = new Env(new ConfigService());

const GraphQLConfigDevelop = () =>
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    path: '/graphql',
    introspection: true,
    cache: 'bounded',
    autoSchemaFile: join(process.cwd(), './schema.gql'),
    sortSchema: true,
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    context: ({ req }: { req: Request }) => ({ authorization: req.headers.authorization }),
    debug: true,
  });

export const GraphQLConfigProduction = () =>
  GraphQLModule.forRoot<ApolloDriverConfig>({
    apollo: env.ApolloStudioConfig,
    driver: ApolloDriver,
    path: '/graphql',
    introspection: true,
    cache: 'bounded',
    autoSchemaFile: join(process.cwd(), './schema.gql'),
    sortSchema: true,
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    context: ({ req }: { req: Request }) => ({ authorization: req.headers.authorization }),
  });

const GraphQLConfigTest = () =>
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    path: '/graphql',
    cache: 'bounded',
    autoSchemaFile: join(process.cwd(), './schema.gql'),
    playground: false,
    context: ({ req }: { req: Request }) => ({ authorization: req.headers.authorization }),
  });

const GraphQLConfig = match(env.NodeEnv)
  .with('develop', () => GraphQLConfigDevelop())
  .with('production', () => GraphQLConfigProduction())
  .with('test', () => GraphQLConfigTest())
  .otherwise(() => GraphQLConfigDevelop());

export default GraphQLConfig;
