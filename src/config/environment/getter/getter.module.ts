import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { match } from 'ts-pattern';
import validate from '../validator';
import Env from './getter.service';

const envFilePath = match(process.env.NODE_ENV)
  .with('development', () => ['.env', '.env.development'])
  .with('production', () => ['.env', '.env.production'])
  .with('test', () => ['.env', '.env.test'])
  .otherwise(() => ['.env', '.env.development']);

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      validate,
      isGlobal: true,
    }),
  ],
  providers: [Env],
  exports: [Env],
})
export default class EnvModule {}
