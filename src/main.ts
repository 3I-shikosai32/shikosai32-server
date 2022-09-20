import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvService } from './config/env/env.service';
import { LoggerService } from '@/config/logger/logger.service';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useLogger(app.get(LoggerService));

  const port = app.get(EnvService).Port;

  await app.listen(port);
};

bootstrap();
