import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configMailer, typeOrmModuleOptions } from 'core/config';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './common/guards';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
