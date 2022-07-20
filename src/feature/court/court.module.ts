import { Module } from '@nestjs/common';
import { CourtService } from './court.service';
import { CourtController } from './court.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Court } from 'core/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Court])
  ],
  controllers: [CourtController],
  providers: [CourtService]
})
export class CourtModule {}
