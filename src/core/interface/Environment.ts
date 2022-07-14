export interface Environment{
  DB_DATABASE: any
  DB_TYPE: any // 'mysql' | 'postgress' | "mariadb"
  DB_HOST: string
  DB_PORT: number
  DB_USERNAME: string
  DB_PASSWORD: string
  [name: string]: any
}