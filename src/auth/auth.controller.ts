import { Controller, Post, Body } from '@nestjs/common';
import { encodePassword } from 'utils/bcrypt';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly _ss: AuthService) {}
  @Post('sign-in')
  signIn(@Body() body: SignInDto) {

    return this._ss.validateUser(body);
  }

  @Post('sign-up')
  async signUp(@Body() body: SignUpDto) {
    const password = await encodePassword(body.password)
    return this._ss.signUp({...body, password});
  }

}
