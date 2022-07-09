import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './auth.constant';
import { PersonModule } from 'feature-school/person/person.module';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Module({
  imports: [
    PersonModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '601s' },
    }),
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService, 
    LocalStrategy, 
    JwtStrategy,
    // JwtService, 
    {
      // This could be set in any module
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
  ],
  exports: [AuthService]
})
export class AuthModule {}
