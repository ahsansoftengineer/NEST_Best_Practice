import { NestFactory } from '@nestjs/core';
import { configSwagger, configValidation } from 'core/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(configValidation);
  configSwagger(app);
  await app.listen(3000);
}
bootstrap();
