import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { ROLES_KEY } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';
import CheckPublic from './checkPublic';

@Injectable() // Access Token Guard
export class AtGuard extends AuthGuard('jwt-access-token') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext) {
    if(CheckPublic(this.reflector, context)) return true
    return super.canActivate(context);
  }
}
