import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvService } from './config/env/env.service';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const port = app.get(EnvService).Port;

  await app.listen(port);
};

bootstrap();
