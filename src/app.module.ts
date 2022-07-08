import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeatureSchoolModule } from './feature-school/feature-school.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeORMConfiguration } from 'config/TypeORMConfiguration';
import { ServerStaticModuleConfig } from 'config/ServerStaticModuleConfig';
import { AuthModule } from 'auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { CONSTANT } from 'constant/contants';
// import * as helmet from ''
@Module({
  imports: [
    MulterModule.register({
      dest: './public'
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }
    ),
    ServerStaticModuleConfig,
    TypeORMConfiguration,
    FeatureSchoolModule,
    AuthModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(cors())
  }
}
