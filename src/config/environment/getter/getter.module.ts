import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import validate from '../validator';
import Env from './getter.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      validate,
      isGlobal: true,
    }),
  ],
  providers: [Env],
  exports: [Env],
})
export default class EnvModule {}
