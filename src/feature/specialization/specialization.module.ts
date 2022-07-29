import { Module } from '@nestjs/common';
import { SpecializationService } from './specialization.service';
import { SpecializationController } from './specialization.controller';

@Module({
  controllers: [SpecializationController],
  providers: [SpecializationService],
})
export class SpecializationModule {}
