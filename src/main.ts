import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    // whitelist: true,
    // skipNullProperties: true,
    // skipUndefinedProperties: true,
    // skipMissingProperties: true
  }))
  const config = new DocumentBuilder()
    .setTitle('School Management System (AHSAN)')
    .setDescription('This application has five major roles (Admin, Headmaster, Teacher, Parents, Student)')
    .setVersion('1.0.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
