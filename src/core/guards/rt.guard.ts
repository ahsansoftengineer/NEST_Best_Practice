import { AuthGuard } from '@nestjs/passport';

export class RtGuard extends AuthGuard('jwt-refresh') {
  // Refresh Token Guard
  constructor() {
    super();
  }
}
