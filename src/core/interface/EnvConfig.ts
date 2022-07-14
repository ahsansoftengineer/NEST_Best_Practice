export interface EnvConfig{
  DB_DATABASE: string
  DB_TYPE: 'mysql' | 'postgress'
  DB_HOST: string
  DB_PORT: number
  DB_USERNAME: string
  DB_PASSWORD: string
  DotEnvValues: any
}