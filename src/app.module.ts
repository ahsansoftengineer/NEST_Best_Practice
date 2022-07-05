import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'core/entities';
import { FeatureSchoolModule } from './feature-school/feature-school.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'schoolmgmt',
      // This how you Registered your Model Classes
      entities,
      synchronize: true,
      // dropSchema: true,
      // logger: 'advanced-console',
      logging: true,
      // subscribers: [],
      // migrations: [],
    }),
    FeatureSchoolModule,
    // FeatureModule
  ],
  // providers: [
  //   {
  //     provide: 'APP_GUARD',
  //     useClass: JwtAuthGuard,
  //   },
  // ],
})
export class AppModule {}
