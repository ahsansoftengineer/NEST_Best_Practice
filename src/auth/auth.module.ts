import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailService } from './auth-mailer.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([User])
    
  ],
  controllers: [AuthController],
  providers: [MailService, AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}
