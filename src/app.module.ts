import { Module } from '@nestjs/common';
import { FeatureModule } from 'feature/feature.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
