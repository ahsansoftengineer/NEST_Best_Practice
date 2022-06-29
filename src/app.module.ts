import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'entities';
import { FeatureModule } from 'feature/feature.module';
import { FeatureSchoolModule } from './feature-school/feature-school.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'SchoolMgmt',
      // This how you Registered your Model Classes
      entities,
      synchronize: true,
      dropSchema: true,
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
