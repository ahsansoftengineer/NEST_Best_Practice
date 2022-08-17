import { ConfigModule } from "@nestjs/config";
let envFilePath = '.env'
const currentEnv = process.env.ENVIRONMENT
if(currentEnv == 'DEV'){
    envFilePath = '.env.dev'
} else if(currentEnv == 'PROD'){
    envFilePath = '.env.prod';
} else if(currentEnv == 'STAGE'){
    envFilePath = '.env.stage'
}
console.log(`Running in ${envFilePath}`);
export const configConfig = ConfigModule.forRoot({
    isGlobal: true,
    envFilePath
})

// To Set the Environment in Power Shell use the following command to change the ENV
// TODO $env:ENVIRONMENT = 'STAGE' ${Power Shell} -> WORKING
// TODO set env:ENVIRONMENT = 'DEV' ${Bash} -> NOT WORKING

// and then run the following command
// TODO npm run start:dev
// NOTE some how it is not working
// Console is displaying the correct message but file is not picking by env
