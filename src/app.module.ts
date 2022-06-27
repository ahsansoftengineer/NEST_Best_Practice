import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'app.controller';
import { FeatureModule } from 'feature/feature.module';

@Module({
  imports: [
    FeatureModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'crud',
      // This how you Registered your Model Classes
      synchronize: true,
      dropSchema: true,
      logging: true
    }),
  ],
  controllers: [AppController]
  // providers: [
  //   {
  //     provide: 'APP_GUARD',
  //     useClass: JwtAuthGuard,
  //   },
  // ],
})
export class AppModule {}
