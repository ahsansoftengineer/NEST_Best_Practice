import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SendgridService } from 'core/shared/service/sandgrid.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy, SendgridService],
})
export class AuthModule {}
