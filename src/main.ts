import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from 'core/config';
import { config } from 'dotenv';
import { parse } from 'dotenv-parse';
import { AppModule } from './app.module';

async function bootstrap() {
  let env = config({})
  if (env.error) throw env.error;
  env = parse(env.parsed);
  console.log(env);
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup(
    '/',
    app,
    SwaggerModule.createDocument(app, SwaggerConfig),
  );
  await app.listen(3000);
}
bootstrap();
