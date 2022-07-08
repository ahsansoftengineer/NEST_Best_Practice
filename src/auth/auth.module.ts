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

@Module({
  imports: [
    PersonModule,
    PassportModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
    
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService, 
    // LocalStrategy, 
    JwtStrategy,
    JwtService, 
  ],
})
export class AuthModule {}
