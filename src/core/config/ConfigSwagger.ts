import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configSwagger = (app) => {
  const swaggerDoc = new DocumentBuilder()
    .setTitle('Karachi Lawyer Portal (KLP)')
    .setDescription('This Application in Process')
    .setVersion('1.0.0')
    .build();
  SwaggerModule.setup('/', app, SwaggerModule.createDocument(app, swaggerDoc));
};
