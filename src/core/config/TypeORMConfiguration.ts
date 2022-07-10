import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { entities } from "core/constant";

// export default class TypeORMConfig {
//   static getORMConfig(_ss: ConfigService): TypeOrmModuleOptions {
    
//     return {
//       type: 'mysql',
//       host: _ss.get('DB_HOST'),
//       port: _ss.get('DB_PORT'),
//       username: _ss.get('DB_USERNAME'),
//       password: _ss.get('DB_PASSWORD'),
//       database: _ss.get('DB_DATABASE'),
//       // This how you Registered your Model Classes
//       entities: entities,
//       // logging: true,
//       logging: ["query", "error"] /* true, 'all', new MyCustomLogger()*/,
//       // Other Settings
//       retryDelay: 10000,
//       retryAttempts: 2,
//       // synchronize: true, 
//       // dropSchema: true,
    
//       // logger: 'advanced-console',
//       // migrations: [],
//       // subscribers: [],
//     }
//   }
// }

// export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
//   imports: [ConfigModule],
//   useFactory: async (_ss: ConfigService): Promise<TypeOrmModuleOptions> => (
//      TypeORMConfig.getORMConfig(_ss)
//   ),
//   inject:[ConfigService]
// }
// STEP 1 
export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'schoolmgmt',
  entities, // STEP 2
  logging: ["query", "error"] /* true, 'all', new MyCustomLogger()*/,
  retryDelay: 10000,
  retryAttempts: 2,
  // synchronize: true, 
  // dropSchema: true,
}