import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { City, Court, Lawyer, Specialization, User } from 'core/entities';
import { RepoService } from 'core/shared/service/repo.service';
import { SharedModule } from 'core/shared/shared.module';
import { MailService } from './auth-mailer.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [MailService, AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}
