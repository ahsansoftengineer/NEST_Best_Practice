import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'core/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([City])
  ],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
