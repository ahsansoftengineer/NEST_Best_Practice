import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FeatureSchoolModule } from './feature-school/feature-school.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeORMConfiguration } from 'config/TypeORMConfiguration';
// import * as helmet from ''
@Module({
  imports: [
    MulterModule.register({
      dest: './public'
    }),
    ServeStaticModule.forRoot({
      // http://localhost:3000/mysql-107a1.png
      rootPath: join(__dirname, '..', 'public'), 
    }),
    TypeORMConfiguration,
    FeatureSchoolModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(cors())
  }
}
