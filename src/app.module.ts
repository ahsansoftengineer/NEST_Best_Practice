import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'crud',
      // This how you Registered your Model Classes
      entities,
      synchronize: true,
      dropSchema: true,
    }),
  ],
  // providers: [
  //   {
  //     provide: 'APP_GUARD',
  //     useClass: JwtAuthGuard,
  //   },
  // ],
})
export class AppModule {}
