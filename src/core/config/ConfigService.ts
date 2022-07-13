import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as dotenv from 'dotenv';

// @Injectable()
// export class ConfigService {
//   private readonly envConfig: any// EnvConfig;

//   constructor() {
//     this.envConfig = dotenv.parse(readFileSync(`${process.env.NODE_ENV}.env`));
//   }

//   get databaseHost(): string {
//     return this.envConfig.DATABASE_HOST;
//   }
// }
