import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import CustomLogger from './logger.service';

@Injectable()
export default class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: CustomLogger) {}

  use(req: Request, res: Response, next: () => void) {
    this.logger.setRequestInfo(req);
    next();
  }
}
