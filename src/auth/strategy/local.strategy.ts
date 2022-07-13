import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ExtractJwt } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private moduleRef: ModuleRef) {
    super({
      passReqToCallback: true,
    });
  }
  async validate(request: Request, username: string, password: string) {
    const contextId = ContextIdFactory.getByRequest(request);
    // "AuthService" is a request-scoped provider
    const authService = await this.moduleRef.resolve(AuthService, contextId);
  }
  // constructor(
  //   private _ss: AuthService,
  //   private jwtService: JwtService

  //   ) {
  //   // You need to tell Strategy Which Field you are going to use by override
  //   super({
  //     // usernameField: 'username', // email
  //     // subField: 'id',
  //     // typeField: 'type'
  //     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //     ignoreExpiration: false,
  //     secretOrKey: 'secret',
  //   });
  // }
  // async validate(username: string, password:string) {
  //   const u = await this._ss.validateUser({username, password});
  //   const payload = { sub: u.id, username: u.username, type: u.type };
  //   if(!u) throw  new UnauthorizedException()
  //   return {
  //       access_token: this.jwtService.sign(payload),
  //   };
  // }
}
// @UseGuards(LocalAuthGuard('local'))
