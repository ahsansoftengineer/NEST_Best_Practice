import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ExtractJwt } from 'passport-jwt';
import { jwtConstants } from 'auth/auth.constant';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private _ss: AuthService) {
    // You need to tell Strategy Which Field you are going to use by override
    super({
      // usernameField: 'username', // email
      // subField: 'id',
      // typeField: 'type'
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  async validate(username: string, password: string): Promise<any> {
    const user = await this._ss.validateUser({username, password})
    if(!user) throw new UnauthorizedException()
    return user
  }
}
// @UseGuards(LocalAuthGuard('local'))
