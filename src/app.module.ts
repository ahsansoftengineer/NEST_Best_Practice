import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configMailer, configStaticFiles, configTypeORM } from 'core/config';
import { RolesGuard } from 'core/guards/role.guard';
import { FeatureModule } from 'feature/feature.module';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './core/guards';
import { AdminModule } from './admin/admin.module';
import { PlayModule } from './play/play.module';
import { SharedModule } from 'core/shared/shared.module';
import { RepoService } from 'core/shared/service/repo.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({
      dest: '../public',
    }),
    configStaticFiles,
    TypeOrmModule.forRoot(configTypeORM),
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
    SharedModule
  ],
})
export class AppModule {}
