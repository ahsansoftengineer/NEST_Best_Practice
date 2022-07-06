import { BaseModel } from "core/BaseModel";
import { DataSource } from "typeorm";
import { DifferentDb } from "./entities/different-db.entity";

export const DifferentDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'anotherdb',
  // This how you Registered your Model Classes
  entities: [BaseModel, DifferentDb],
  logging: true,
  // Other Settings
  synchronize: true,
  // dropSchema: true,
})
