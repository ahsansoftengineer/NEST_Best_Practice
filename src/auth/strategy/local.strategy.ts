import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private _ss: AuthService) {
    // You need to tell Strategy Which Field you are going to use by override
    super({
      // usernameField: 'username', // email
      // subField: 'id',
      // typeField: 'type'
    });
  }
  async validate(username: string, password: string): Promise<any> {
    console.log('Inside Local Strategy.validate', {username, password});
    const user = await this._ss.validateUser({username, password})
    if(!user) throw new UnauthorizedException()
    return user
  }
}
// @UseGuards(LocalAuthGuard('local'))
