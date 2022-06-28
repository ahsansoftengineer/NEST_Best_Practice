import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { FeatureModule } from './feature/feature.module';

@Module({
  imports: [FeatureModule],
  controllers: [AppController],
})
export class AppModule {}
