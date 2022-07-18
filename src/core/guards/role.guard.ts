import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<ROLE[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!roles) {
      return true;
    }
    const {role} = context.switchToHttp().getRequest();
    console.log({role});
    console.log({roles});
    
    const result  = roles?.some((a) => a == role);
    console.log({result});
    return result
    
  }
}