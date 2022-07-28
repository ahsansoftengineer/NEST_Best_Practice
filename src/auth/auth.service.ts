import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  argon,
  ENV,
  searalizeUser,
  throwForbiddenException,
} from 'core/constant';
import { Lawyer, User } from 'core/entities';
import { ROLE, STATUS } from 'core/enums';
import { RepoService } from 'core/shared/service/repo.service';
import { In } from 'typeorm';
import { MailService } from './auth-mailer.service';

import { SignUpDto } from './dto';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpLawyerDto } from './dto/sign-up-lawyer.dto';
import { JwtPayload, Tokens } from './types';

@Injectable()
export class AuthService {
  logger: Logger;
  constructor(
    private _jwt: JwtService,
    private _config: ConfigService,
    private _mail: MailService,
    public repos: RepoService,
  ) {
    this.logger = new Logger();
  }
  async signUpAdmin(data: SignUpDto): Promise<Tokens> {
    this.logger.warn('Sign Up Admin is triggered!');
    const hashResult = await argon.hash(data.password);

    const existUser = await this.repos.user.findOneBy({ email: data.email });
    throwForbiddenException(existUser);

    const user = this.repos.user.create({ ...data, password: hashResult });
    await this.repos.user.save(user).catch(() => {
      throw new ForbiddenException('Credentials incorrect');
    });

    return this.returnGeneratedToken(user);
  }

  async signUpLawyer(data: SignUpLawyerDto): Promise<Tokens> {
    const existUser = await this.repos.user.findOneBy({ email: data.email });

    throwForbiddenException(existUser);

    const user: User = searalizeUser(data, ROLE.LAWYER, STATUS.PENDING);
    user.password = await argon.hash(data.password);
    const courts = await this.repos.court.findBy({
      id: In([...data.courtIds]),
    });
    const specialization = await this.repos.specialization.findOneBy({
      id: data.specializationId,
    });
    const lawyerResult: Lawyer = {
      specialization,
      court: courts,
      user,
    };

    const lawyer = this.repos.lawyer.create({ ...lawyerResult });
    await this.repos.lawyer.save(lawyer).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });

    return this.returnGeneratedToken(lawyer.user);
  }

  async signUpLocal(data: SignUpDto): Promise<Tokens> {
    const hashResult = await argon.hash(data.password);

    const existUser = await this.repos.user.findOneBy({ email: data.email });

    if (existUser)
      throw new ForbiddenException(
        'User already Exsist with the ' + data.email,
      );

    const user = this.repos.user.create({ ...data, password: hashResult });
    await this.repos.user.save(user).catch(() => {
      throw new ForbiddenException('Credentials incorrect');
    });

    return this.returnGeneratedToken(user);
  }

  async signinLocal(dto: SignInDto): Promise<Tokens> {
    const user = await this.repos.user.findOneBy({ email: dto.email });

    if (!user) throw new ForbiddenException('Access Denied');

    const passwordMatches = await argon.verify(user.password, dto.password);
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    return this.returnGeneratedToken(user);
  }

  async forgetPassword(email: string) {
    const user = await this.repos.user.findOneBy({ email });
    if (!user) throw new ForbiddenException('Username is incorrect');
    return this._mail.forgetPassword(email);
  }

  async changePassword(changePasswordCode: string) {
    // const user = await this.repos.findOneBy({email})
    // if (!user) throw new ForbiddenException('Username is incorrect');
    // return this._mail.forgetPassword(email)
  }

  async logout(id: number): Promise<boolean> {
    if (!id) return false;
    const result = await this.repos.user.findOneBy({ id });
    if (result && result.hashedRt != null) {
      this.repos.user.update(id, { hashedRt: null });
    }
    return true;
  }

  async refreshTokens(id: number, rt: string): Promise<Tokens> {
    const user = await this.repos.user.findOneBy({ id });

    if (!user || !user.hashedRt) throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(user.hashedRt, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    return this.returnGeneratedToken(user);
  }
  async returnGeneratedToken(user: User) {
    const tokens = await this.getTokens(user.id, user.email, user.role);
    await this.updateRtHash(user.id, tokens.refresh_token);
    tokens.user = this.returnedSearializedUser(user);
    return tokens;
  }
  async getTokens(id: number, email: string, role: ROLE): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: id,
      email,
      role,
    };

    const [at, rt] = await Promise.all([
      this._jwt.signAsync(jwtPayload, {
        secret: this._config.get<string>(ENV.JWT_AT_SECRET),
        expiresIn: ENV.JWT_ACCESS_TOKEN_EXPIRE,
      }),
      this._jwt.signAsync(jwtPayload, {
        secret: this._config.get<string>(ENV.JWT_RT_SECRET),
        expiresIn: ENV.JWT_REFRESH_TOKEN_EXPIRE,
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
  async updateRtHash(id: number, rt: string): Promise<void> {
    const hash = await argon.hash(rt);
    await this.repos.user.update(id, { hashedRt: hash });
  }
  returnedSearializedUser({
    id,
    name,
    email,
    gender,
    mobile,
    role,
    status,
  }: User) {
    return { id, name, email, gender, mobile, role, status };
  }
}
