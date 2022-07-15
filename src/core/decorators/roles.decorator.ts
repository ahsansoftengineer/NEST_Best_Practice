import { SetMetadata } from '@nestjs/common';
import { ROLE } from 'core/enums';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ROLE[]) => SetMetadata(ROLES_KEY, roles);

// @Roles(ROLE.ADMIN, ROLE.USER)
