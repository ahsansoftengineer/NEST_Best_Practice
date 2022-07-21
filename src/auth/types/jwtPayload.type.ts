import { ROLE } from 'core/enums';

export type JwtPayload = {
  email: string;
  sub: number;
  role: ROLE;
};
