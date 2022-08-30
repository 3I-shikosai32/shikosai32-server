import { Module } from '@nestjs/common';
import HelloQuery from './hello.resolver.query';

@Module({
  providers: [HelloQuery],
})
export default class HelloModule {}
