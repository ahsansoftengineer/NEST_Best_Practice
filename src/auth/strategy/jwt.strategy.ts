import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../auth.constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {//jwt2, jwt3
  // Extracting Token form Headers
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // production set it to false
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return payload
    // return { id: payload.id, username: payload.username, type: payload.type };
    // return { userId: payload.sub, username: payload.username };
  }
}
// @UseGuards(AuthGuard('jwt'))
