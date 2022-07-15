import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configMailer, typeOrmModuleOptions } from 'core/config';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './core/guards';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({
      dest: './public',
    }),
    AuthModule, 
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    MailerModule.forRoot(configMailer)
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
  exports: [
    MailerModule // Those modules has Services Must needs to be exported
  ]
})
export class AppModule {}
