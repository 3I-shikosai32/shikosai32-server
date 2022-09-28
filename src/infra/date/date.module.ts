import { Global, Module } from '@nestjs/common';
import { DateService } from './date.service';

@Global()
@Module({
  providers: [DateService],
  exports: [DateService],
})
export class DateModule {}
