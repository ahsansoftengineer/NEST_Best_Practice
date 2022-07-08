import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Person } from 'feature-school/person/entities/person.entity';
import { PersonService } from 'feature-school/person/person.service';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private person: PersonService,
    private jwtService: JwtService
    ) {}

  async validateUser({username, password}): Promise<any> {
    const person = await this.person.repo.findOneBy({username});
    if (person  && person.password === password) {
      const {...result } = person;
      return result;
    }
    return null;
  }
  async signUp(data: SignUpDto){
    return data
  }
  signInGenerateToken({id, username, email,  type}: Person) {
    return { access_token: 'bareer ' + this.jwtService.sign({  id, username, type, email})};
  }
}
