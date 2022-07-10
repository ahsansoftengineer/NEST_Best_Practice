import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationConfig } from 'core/config/ValidationConfig';
import { SwaggerConfig } from 'core/config/SwaggerConfig';
import { SessionConfig } from 'core/config';
// import passport, { initialize, session } from 'passport';
import * as passport from 'passport'

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(SessionConfig)
  app.use(passport.initialize(), passport.session()) // Loo k
  app.enableCors({
    allowedHeaders:"*",
    origin: "*"
  })
  app.useGlobalPipes(ValidationConfig)
  SwaggerModule.setup('/', app, 
    SwaggerModule.createDocument(app, SwaggerConfig)
  )
  // app.use(csurf())
  // app.useGlobalFilters()
  // app.useGlobalGuards()
  // app.useGlobalInterceptors()
  // app.useLogger(false)
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
