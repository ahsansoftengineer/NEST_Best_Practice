import {
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { User } from 'auth/entities/user.entity';
import { envar } from 'core/constant';
// STEP 1
export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: envar.DB_TYPE,
  host: envar.DB_HOST,
  port: envar.DB_PORT,
  username: envar.DB_USERNAME,
  password: envar.DB_PASSWORD,
  database: envar.DB_DATABASE,
  entities: [User], // STEP 2
  logging: ['query', 'error'] /* true, 'all', new MyCustomLogger()*/,
  retryDelay: 10000,
  retryAttempts: 2,
  // synchronize: true,
  // dropSchema: true,
};
