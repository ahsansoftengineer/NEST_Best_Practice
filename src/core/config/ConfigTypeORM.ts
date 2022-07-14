import {
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { User } from 'auth/entities/user.entity';
import { ENV } from 'core/constant';
// STEP 1
export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: ENV.DB_TYPE,
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  entities: [User], // STEP 2
  logging: ['query', 'error'] /* true, 'all', new MyCustomLogger()*/,
  retryDelay: 10000,
  retryAttempts: 2,
  // synchronize: true,
  // dropSchema: true,
};
