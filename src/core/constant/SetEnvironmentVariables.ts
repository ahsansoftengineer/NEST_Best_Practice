import { Environment } from 'core/interface';
import { config } from 'dotenv';
import { parse } from 'dotenv-parse';

let env: any = config({
  // path: join(process.env.INIT_CWD, '.env.test')
});
if (env.error) throw env.error;
env = parse(env.parsed);
export const ENV: Environment = env;
