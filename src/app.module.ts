import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'core/entities';
import { FeatureSchoolModule } from './feature-school/feature-school.module';
import * as cors from 'cors'
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfigService } from 'settings/MulterConfigService';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// import * as helmet from ''
@Module({
  imports: [
    MulterModule.register({
      dest: './public'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // http://localhost:3000/mysql-107a1.png
      // serveStaticOptions: {extensions: ['png', '.png']}

    }),
    // MulterModule.registerAsync({
    //   useFactory: () => ({
    //     dest: './uploads',
    //   }),
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'schoolmgmt',
      // This how you Registered your Model Classes
      entities,
      // logging: true,
      logging: ["query", "error"] /* true, 'all', new MyCustomLogger()*/,
      // Other Settings
      retryDelay: 10000,
      retryAttempts: 2,
      // synchronize: true, 
      // dropSchema: true,

      // logger: 'advanced-console',
      // migrations: [],
      // subscribers: [],
    }),
    FeatureSchoolModule,
    // GraphQLModule.forRoot({
    //   cors: {
    //     origin: 'http://localhost:3000',
    //     credentials: true,
    //   },
    // }),
    // FeatureModule
  ],
  // providers: [
  //   {
  //     provide: 'APP_GUARD',
  //     useClass: JwtAuthGuard,
  //   },
  // ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors())
  }

}
