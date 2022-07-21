import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Court, Lawyer, Specialization, User } from 'core/entities';
import { MailService } from './auth-mailer.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([User, Lawyer, Court, Specialization]),
  ],
  controllers: [AuthController],
  providers: [MailService, AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}
