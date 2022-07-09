import { AuthUserGuard } from './auth-user.guard';

describe('AuthUserGuard', () => {
  it('should be defined', () => {
    expect(new AuthUserGuard()).toBeDefined();
  });
});
