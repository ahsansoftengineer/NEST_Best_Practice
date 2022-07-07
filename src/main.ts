import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerMiddleware } from 'middleware/LoggerMiddleware';
import * as csurf from 'csurf';
import { AppModule } from './app.module';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    allowedHeaders:"*",
    origin: "*"
  })
  // app.use(csurf())
  // app.useGlobalFilters()
  // app.useGlobalGuards()
  // app.useGlobalInterceptors()
  // app.useLogger(false)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // It is Working Only the Properties avalaible in DTO will go through
    // skipMissingProperties?: boolean;
    // forbidNonWhitelisted?: boolean;
    // groups?: string[];
    // dismissDefaultMessages?: boolean;
    // validationError?: {
    //   target?: boolean;
    //   value?: boolean;
    // };
  
    // forbidUnknownValues?: boolean;
    // stopAtFirstError?: boolean;
    // Below Settings Not Working
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
