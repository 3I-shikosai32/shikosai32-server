import { Module } from '@nestjs/common';
import { configure, getLogger } from 'log4js';
import config from './logger.config.json';
import { LoggerService } from './logger.service';

const loggerFactory = {
  provide: LoggerService,
  useFactory: () => {
    configure(config);
    return new LoggerService(getLogger('default'));
  },
};

@Module({
  providers: [loggerFactory],
  exports: [loggerFactory],
})
export class LoggerModule {}
