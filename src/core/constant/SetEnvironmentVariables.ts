import { Environment } from "core/interface";
import { config } from "dotenv";
import { parse } from "dotenv-parse";

let env: any = config({})
if (env.error) throw env.error;
env = parse(env.parsed);
export const envar: Environment = env