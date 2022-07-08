import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerMiddleware } from 'middleware/LoggerMiddleware';
import * as csurf from 'csurf';
import { AppModule } from './app.module';
import { ValidationConfig } from 'config/ValidationConfig';
import { SwaggerConfig } from 'config/SwaggerConfig';

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
  app.useGlobalPipes(ValidationConfig)
  const document = SwaggerModule.createDocument(app, SwaggerConfig)
  SwaggerModule.setup('/', app, document)
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
