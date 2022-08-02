import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ENV } from 'core/constant';
import { baseEntities, entities } from 'core/entities/entities';
// STEP 1
// MysqlConnectionOptions
const typeORMGeneralOptions: TypeOrmModuleOptions = {
  type: ENV.DB_TYPE,
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  entities: [...baseEntities, ...entities], // STEP 2
  retryDelay: 10000,
  retryAttempts: 2, 
  logging: true,// ['query', 'error'] /* true, 'all', new MyCustomLogger()*/,
  // logger: 'advanced-console' // default

  // synchronize: ENV.DB_SYNC,
  // dropSchema: ENV.DB_DROP,
}
export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  ...typeORMGeneralOptions,
  synchronize: ENV.DB_SYNC,
  dropSchema: ENV.DB_DROP,
};
const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  useFactory: async () => {
    return {
      ...typeORMGeneralOptions,
      migrations: [
        // __dirname + '/../db/migrations/*{.ts,.js}'
        '/dist/src/core/db/migrations/*.js'
      ],
      cli: {
        migerationDir: 'src/core/db/migrations'
      },
      extra: {
        charset:'utf8_unicode_ci'
      },
      synchronize: ENV.DB_SYNC,
      dropSchema: ENV.DB_DROP,
    }
  }
  
};

export const TypeOrmModuleRoot = TypeOrmModule.forRoot(typeOrmModuleOptions);
// Async Configuration has the ability for cli options
export const TypeOrmModuleRootAsync = TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions);

