import { ConfigModule } from "@nestjs/config";
let envFilePath = '.env'
const currentEnv = process.env.ENVIRONMENT
console.log(`Running in ${currentEnv}`);
if(currentEnv == 'DEV'){
    envFilePath = '.env.dev'
} else if(currentEnv == 'PROD'){
    envFilePath = '.env.prod';
} else if(currentEnv == 'STAGE'){
    envFilePath = '.env.stage'
}
export const configConfig = ConfigModule.forRoot({
    isGlobal: true,
    envFilePath
})