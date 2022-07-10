import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FeatureSchoolModule } from './feature-school/feature-school.module';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'auth/auth.module';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { ServerStaticModuleConfig, typeOrmModuleOptions } from 'core/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
// import * as helmet from ''
@Module({
  imports: [
    MulterModule.register({
      dest: './public'
    }),
 
    PassportModule.register({
      session: true
    }),
    JwtModule.register({
      secret: 'secret',//`${process.env.JWT_SECRET_KEY}`,
      signOptions: { expiresIn: '600s' },
      // secretOrPrivateKey:'secret'
    }),
    ServerStaticModuleConfig,
    AuthModule,
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    FeatureSchoolModule,
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
