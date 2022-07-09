import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeatureSchoolModule } from './feature-school/feature-school.module';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'auth/auth.module';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { ServerStaticModuleConfig, TypeORMConfiguration } from 'core/config';
import { JwtModule } from '@nestjs/jwt';
import configuration from 'core/config/configuration';
import { env } from 'process';
// import * as helmet from ''
@Module({
  imports: [
    // ConfigModule,
    MulterModule.register({
      dest: './public'
    }),
    ConfigModule.forRoot({
      // isGlobal: true,
      // load: [configuration],
      // envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
    JwtModule.register({
      secret: 'secret',//`${process.env.JWT_SECRET_KEY}`,
      signOptions: { expiresIn: '600s' },
      // secretOrPrivateKey:'secret'
    }),
    ServerStaticModuleConfig,
    TypeORMConfiguration,
    FeatureSchoolModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
  // exports: [ConfigModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(cors())
  }
}
