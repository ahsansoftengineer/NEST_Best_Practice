import { AuthGuard } from '@nestjs/passport';

export class RtGuard extends AuthGuard('jwt-refresh-token') {
  // Refresh Token Guard
  constructor() {
    super();
  }
}
