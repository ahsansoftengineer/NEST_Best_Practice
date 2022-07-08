import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './auth.constant';
import { PersonModule } from 'feature-school/person/person.module';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { PersonService } from 'feature-school/person/person.service';
import { Person } from 'feature-school/person/entities/person.entity';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    PersonModule,
    PassportModule,
    TypeOrmModule.forFeature([User, Person]),
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
    PersonService],
  exports: [AuthService],
})
export class AuthModule {}