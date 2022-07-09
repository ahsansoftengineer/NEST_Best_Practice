import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { comparePassword } from 'core/utils';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) public repo: Repository<User>
    ) {}

  async validateUser({username, password}): Promise<any> {
    const user = await this.repo.findOneBy({username});
    if (user) {
      const matched = comparePassword(password, user.password)
      console.log({matched});
      if(matched)return user
      else return null
    } else return null;
  }
  async signUp(data: SignUpDto){
    return data
  }
  signInGenerateToken({id, username, type}: User) {
    return { access_token: 'bareer ' + this.jwtService.sign({  id, username, type})};
  }
}
