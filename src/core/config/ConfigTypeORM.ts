import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { ENV } from 'core/constant';
import { baseEntities, entities } from 'core/entities/entities';
// STEP 1
// MysqlConnectionOptions
export const configTypeORM: TypeOrmModuleOptions = {
  type: ENV.DB_TYPE,
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  entities: [...baseEntities, ...entities], // STEP 2
  migrations: [
    '/dist/src/core/db/migrations/*.js'
  ],
  // migrationsTableName: 'if you need migration table name to be different from'
  // cli: {
  //   migerationDir: 'scr/core/db/migrations'
  // },
  logging: 'all',// ['query', 'error'] /* true, 'all', new MyCustomLogger()*/,
  retryDelay: 10000,
  retryAttempts: 2,
  synchronize: ENV.DB_SYNC,
  dropSchema: ENV.DB_DROP,
};

export const TypeOrmModuleRoot = TypeOrmModule.forRoot(configTypeORM);

