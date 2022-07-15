import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configMailer, configStaticFiles, configTypeORM } from 'core/config';
import { FeatureModule } from 'feature/feature.module';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './core/guards';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({
      dest: './public',
    }),
    configStaticFiles,
    TypeOrmModule.forRoot(configTypeORM),
    MailerModule.forRoot(configMailer),
    AuthModule, 
    FeatureModule,
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
