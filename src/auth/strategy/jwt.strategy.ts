import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { jwtConstants } from '../auth.constant';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'auth/auth.decorator';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {//jwt2, jwt3
  // Extracting Token form Headers
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector
    
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // production set it to false
      secretOrKey: 'secret',
    });
  }

  async validate(u: any) {
    
    const payload = { sub: u.id, username: u.username};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
// @UseGuards(AuthGuard('jwt'))
