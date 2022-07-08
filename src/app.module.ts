import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FeatureSchoolModule } from './feature-school/feature-school.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeORMConfiguration } from 'config/TypeORMConfiguration';
import { ServerStaticModuleConfig } from 'config/ServerStaticModuleConfig';
// import * as helmet from ''
@Module({
  imports: [
    MulterModule.register({
      dest: './public'
    }),
    ServerStaticModuleConfig,
    TypeORMConfiguration,
    FeatureSchoolModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(cors())
  }
}
