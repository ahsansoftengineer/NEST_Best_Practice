import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { comparePassword, encodePassword } from 'core/utils';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) public repo: Repository<User>,
    private jwtService: JwtService

    ) {}

  async validateUser(data: SignInDto): Promise<any> {
    const u = await this.repo.findOneBy({username: data.username});
    const matched = comparePassword(data.password, u.password)
    if (u && matched) {
     return u
    } else throw  new UnauthorizedException();
  }
  async signUp(data: SignUpDto){
    const result =  {...data, password: encodePassword(data.password)}
    const final =  await this.repo.create(result);
    return this.repo.save(final)
    // return this.generateToken(final) 
  }
  async forgetPassword(data: SignUpDto) {
    let result:any = await this.repo.findOneBy({username: data.username});
    result =  {...data, password: encodePassword(data.password)}
    if(result) result = await this.repo.update({username: data.username}, result);
    return result ? {message: 'updated successfully'}: { message: `username ${result.username} does not exsist` };
  }

  // generateToken({id, username, type}: User) {
  //   return { access_token: 'bareer ' + this.jwtService.sign({  id, username, type})};
  // }
}
