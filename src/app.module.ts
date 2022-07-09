import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeatureSchoolModule } from './feature-school/feature-school.module';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'auth/auth.module';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { ServerStaticModuleConfig, TypeORMConfiguration } from 'core/config';
// import * as helmet from ''
@Module({
  imports: [
    MulterModule.register({
      dest: './public'
    }),
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: ['.env.development.local', '.env.development', '.env'],
    // }
    // ),
    ServerStaticModuleConfig,
    TypeORMConfiguration,
    FeatureSchoolModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(cors())
  }
}
