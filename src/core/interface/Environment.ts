export interface Environment{
  DB_DATABASE: any
  DB_TYPE: any // 'mysql' | 'postgress' | "mariadb"
  DB_HOST: string
  DB_PORT: number
  DB_USERNAME: string
  DB_PASSWORD: string
  DB_SYNC: boolean
  DB_DROP: boolean
  JWT_ACCESS_TOKEN: string
  JWT_REFRESH_TOKEN: string

  [name: string]: any
}