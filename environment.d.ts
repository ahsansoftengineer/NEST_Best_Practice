declare namespace NodeJS {
  export interface ProcessEnv{
    DB_DATABASE: any;
    DB_TYPE: any; // 'mysql' | 'postgress' | "mariadb"
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_SYNC: boolean;
    DB_DROP: boolean;
  
    TYPEORM_SEEDING_FACTORIES:string;
    TYPEORM_SEEDING_SEEDS:string
    TYPEORM_MIGERATION:string
  
    JWT_ACCESS_TOKEN: string;
    JWT_REFRESH_TOKEN: string;
    JWT_AT_SECRET: string;
    JWT_RT_SECRET: string;
    JWT_ACCESS_TOKEN_EXPIRE: string
    JWT_REFRESH_TOKEN_EXPIRE:string
  
    MAIL_API_KEY:string
    MAIL_FROM:string
    [name: string]: any;
  }
}
// process.env.MAIL_FROM