import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Person } from 'feature/person/entities/person.entity';
import { PersonService } from 'feature/person/person.service';

@Injectable()
export class AuthService {
  constructor(
    private person: PersonService,
    private jwtService: JwtService
    ) {}

  async validateUser(name: string, gender: string): Promise<any> {
    const user = await this.person.findOneByName(name);
    if (user && (user instanceof Person) && user.gender === gender) {
      const {...result } = user;
      return result;
    }
    return null;
  }
  async login(user: Person) {
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
