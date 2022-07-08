import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
    ) {}

  async validateUser({username, password}): Promise<any> {
    const person = await this.validateUser({username, password});
    if (person  && person.password === password) {
      const {...result } = person;
      return result;
    }
    return null;
  }
  async signUp(data: SignUpDto){
    return data
  }
  signInGenerateToken({id, username, type}: User) {
    return { access_token: 'bareer ' + this.jwtService.sign({  id, username, type})};
  }
}
