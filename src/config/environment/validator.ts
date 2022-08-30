import { plainToClass } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class EnvValidator {
  NODE_ENV: 'development' | 'production' | 'test';

  PORT = 4000;

  @IsNotEmpty()
  @IsString()
  DATABASE_URL: string;

  APOLLO_KEY: string;

  APOLLO_GRAPH_ID: string;

  @IsNotEmpty()
  FIREBASE_API_KEY: string;

  @IsNotEmpty()
  FIREBASE_AUTH_DOMAIN: string;

  @IsNotEmpty()
  FIREBASE_PROJECT_ID: string;

  @IsNotEmpty()
  FIREBASE_STORAGE_BUCKET: string;

  @IsNotEmpty()
  FIREBASE_MESSAGING_SENDER_ID: string;

  @IsNotEmpty()
  FIREBASE_APP_ID: string;

  @IsNotEmpty()
  FIREBASE_MEASUREMENT_ID: string;

  @IsNotEmpty()
  FIREBASE_ADMIN_PROJECT_ID: string;

  @IsNotEmpty()
  FIREBASE_ADMIN_PRIVATE_KEY: string;

  @IsNotEmpty()
  FIREBASE_ADMIN_CLIENT_EMAIL: string;
}

const validate = (config: Record<string, unknown>) => {
  const validatedConfig = plainToClass(EnvValidator, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};

export default validate;
