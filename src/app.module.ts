import { MailerModule } from '@nestjs-modules/mailer';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import {
  configMailer,
  configStaticFiles,
  TypeOrmModuleRoot,
} from 'core/config';
import { RolesGuard } from 'core/guards/role.guard';
import { FeatureModule } from 'feature/feature.module';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './core/guards';
import { AdminModule } from './admin/admin.module';
import { PlayModule } from './play/play.module';
import { SharedModule } from 'core/shared/shared.module';
import { LoggerMiddleware } from 'core/middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({
      dest: '../public',
    }),
    configStaticFiles,
    TypeOrmModuleRoot,
    MailerModule.forRoot(configMailer),
    SharedModule,
    AuthModule,
    FeatureModule,
    AdminModule,
    PlayModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [
    MailerModule, // Those modules has Services Must needs to be exported
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
