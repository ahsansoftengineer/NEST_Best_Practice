import {
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { User } from 'auth/entities/user.entity';
// STEP 1
export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'klp',
  entities: [User], // STEP 2
  logging: ['query', 'error'] /* true, 'all', new MyCustomLogger()*/,
  retryDelay: 10000,
  retryAttempts: 2,
  // synchronize: true,
  // dropSchema: true,
};
