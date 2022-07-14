import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
  .setTitle('School Management System (AHSAN)')
  .setDescription(
    'This application has five major roles (Admin, Headmaster, Teacher, Parents, Student)',
  )
  .setVersion('1.0.0')
  .build();
