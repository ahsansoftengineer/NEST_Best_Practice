import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { configSwagger } from 'core/config';
import { ENV } from 'core/constant';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(ENV);
  
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  configSwagger(app)
  await app.listen(3000);
}
bootstrap();
