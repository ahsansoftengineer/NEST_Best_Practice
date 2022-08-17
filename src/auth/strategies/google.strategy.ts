import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ENV } from 'core/constant';
import { Strategy } from 'passport-jwt';

@Injectable()
export class GoogleStrategy extends PassportStrategy(
  Strategy,
  ENV.GOOGLE,
) {
  constructor() {
    super({
      clientID: '',
      clientSecret: '',
      callbackURL: "",
      scope: ""
    });
  }

  validate(accessToken: string, refreshToken:string, profile:any
    // done: VerifyCallback
    ) {
    const {name, emails, photos} = profile
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken
    }
    // done(null, user)
  }
}
