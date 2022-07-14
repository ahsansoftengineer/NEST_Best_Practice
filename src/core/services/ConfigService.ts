import { Injectable } from "@nestjs/common";
import { EnvConfig } from "core/interface";
import { parse } from "dotenv-parse";
import { readFileSync } from "fs";

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig | any;

  constructor() {
    // const data = parse(readFileSync(`${process.env.NODE_ENV}.env`), {});
    // this.envConfig = data
  }

  get databaseHost(): string {
    return this.envConfig.DATABASE_HOST;
  }
}