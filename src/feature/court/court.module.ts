import { Module } from '@nestjs/common';
import { CourtService } from './court.service';
import { CourtController } from './court.controller';
import { Court } from './entities/court.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Court])
  ],
  controllers: [CourtController],
  providers: [CourtService]
})
export class CourtModule {}
