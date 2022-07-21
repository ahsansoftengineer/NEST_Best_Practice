import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'app.module';
import { AuthService } from 'auth/auth.service';
import { Tokens } from 'auth/types';
import { User } from 'core/entities';
import { ROLE } from 'core/enums';
import { decode } from 'jsonwebtoken';
import { Repository } from 'typeorm';

const user = {
  email: 'test@gmail.com',
  password: 'aBc@123',
  confirmPassword: 'aBc@123',
  role: ROLE.ADMIN,
};

describe('Auth Flow', () => {
  let authService: AuthService;
  let moduleRef: TestingModule;
  let repo: Repository<User>;
  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    authService = moduleRef.get(AuthService);
  });

  afterAll(async () => {
    await moduleRef.close();
  });

  describe('signup', () => {
    beforeAll(async () => {
      await repo.clear();
    });

    it('should signup', async () => {
      const tokens = await authService.signupLocal(user);

      expect(tokens.access_token).toBeTruthy();
      expect(tokens.refresh_token).toBeTruthy();
    });

    it('should throw on duplicate user signup', async () => {
      let tokens: Tokens | undefined;
      try {
        tokens = await authService.signupLocal(user);
      } catch (error) {
        expect(error.status).toBe(403);
      }
      expect(tokens).toBeUndefined();
    });
  });

  describe('signin', () => {
    beforeAll(async () => {
      await repo.clear();
    });
    it('should throw if no existing user', async () => {
      let tokens: Tokens | undefined;
      try {
        tokens = await authService.signinLocal(user);
      } catch (error) {
        expect(error.status).toBe(403);
      }

      expect(tokens).toBeUndefined();
    });

    it('should login', async () => {
      await authService.signupLocal(user);
      const tokens = await authService.signinLocal(user);

      expect(tokens.access_token).toBeTruthy();
      expect(tokens.refresh_token).toBeTruthy();
    });

    it('should throw if password incorrect', async () => {
      let tokens: Tokens | undefined;
      try {
        tokens = await authService.signinLocal({
          email: user.email,
          password: user.password + 'a',
        });
      } catch (error) {
        expect(error.status).toBe(403);
      }

      expect(tokens).toBeUndefined();
    });
  });

  describe('logout', () => {
    beforeAll(async () => {
      await repo.clear();
    });

    it('should pass if call to non existent user', async () => {
      const result = await authService.logout(4);
      expect(result).toBeDefined();
    });

    it('should logout', async () => {
      await authService.signupLocal(user);

      let userFromDb: User | null;

      userFromDb = await repo.findOneBy({
        email: user.email,
      });
      expect(userFromDb?.hashedRt).toBeTruthy();

      // logout
      await authService.logout(userFromDb!.id);

      userFromDb = await repo.findOneBy({
        email: user.email,
      });

      expect(userFromDb?.hashedRt).toBeFalsy();
    });
  });

  describe('refresh', () => {
    beforeAll(async () => {
      await repo.clear();
    });

    it('should throw if no existing user', async () => {
      let tokens: Tokens | undefined;
      try {
        tokens = await authService.refreshTokens(1, '');
      } catch (error) {
        expect(error.status).toBe(403);
      }

      expect(tokens).toBeUndefined();
    });

    it('should throw if user logged out', async () => {
      // signup and save refresh token
      const _tokens = await authService.signupLocal(user);

      const rt = _tokens.refresh_token;

      // get user id from refresh token
      // also possible to get using prisma like above
      // but since we have the rt already, why not just decoding it
      const decoded = decode(rt);
      const userId = Number(decoded?.sub);

      // logout the user so the hashedRt is set to null
      await authService.logout(userId);

      let tokens: Tokens | undefined;
      try {
        tokens = await authService.refreshTokens(userId, rt);
      } catch (error) {
        expect(error.status).toBe(403);
      }

      expect(tokens).toBeUndefined();
    });

    it('should throw if refresh token incorrect', async () => {
      await repo.clear();

      const _tokens = await authService.signupLocal(user);
      console.log({
        _tokens,
      });

      const rt = _tokens.refresh_token;

      const decoded = decode(rt);
      const userId = Number(decoded?.sub);

      let tokens: Tokens | undefined;
      try {
        tokens = await authService.refreshTokens(userId, rt + 'a');
      } catch (error) {
        expect(error.status).toBe(403);
      }

      expect(tokens).toBeUndefined();
    });

    it('should refresh tokens', async () => {
      await repo.clear();
      // log in the user again and save rt + at
      const _tokens = await authService.signupLocal(user);

      const rt = _tokens.refresh_token;
      const at = _tokens.access_token;

      const decoded = decode(rt);
      const userId = Number(decoded?.sub);

      // since jwt uses seconds signature we need to wait for 1 second to have new jwts
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });

      const tokens = await authService.refreshTokens(userId, rt);
      expect(tokens).toBeDefined();

      // refreshed tokens should be different
      expect(tokens.access_token).not.toBe(at);
      expect(tokens.refresh_token).not.toBe(rt);
    });
  });
});
