import { NestFactory } from '@nestjs/core';
import AppModule from './app/app.module';
import LoggerService from '@/config/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.useLogger(app.get(LoggerService));
  const port = process.env.PORT || 4000;

  await app.listen(port);
}

bootstrap();
