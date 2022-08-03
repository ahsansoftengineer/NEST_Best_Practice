import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'core/entities';
import { JwtPayload } from '../../auth/types';

export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return user.sub; // For Getting User Id
  },
);

// export const GetCurrentLawyerId = createParamDecorator(
//   (_: undefined, context: ExecutionContext): number => {
//     const request = context.switchToHttp().getRequest();
//     const lawyer = request.user as JwtPayload;
//     return lawyer.sub; // For Getting Lawyer Id
//   },
// );

export const GetJwtPayload = createParamDecorator(
  (_: undefined, context: ExecutionContext): JwtPayload => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return user; // For Getting User Id
  },
);
