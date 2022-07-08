import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "core/entities";

export const TypeORMConfiguration = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'schoolmgmt',
  // This how you Registered your Model Classes
  entities,
  // logging: true,
  logging: ["query", "error"] /* true, 'all', new MyCustomLogger()*/,
  // Other Settings
  retryDelay: 10000,
  retryAttempts: 2,
  // synchronize: true, 
  // dropSchema: true,

  // logger: 'advanced-console',
  // migrations: [],
  // subscribers: [],
})