import { AuthGuard } from '@nestjs/passport';
import { ENV } from 'core/constant';

export class RtGuard extends AuthGuard(ENV.JWT_REFRESH_TOKEN) {
  // Refresh Token Guard
  constructor() {
    super();
  }
}
