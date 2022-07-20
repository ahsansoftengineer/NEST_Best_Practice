import { Module } from '@nestjs/common';
import { SpecializationService } from './specialization.service';
import { SpecializationController } from './specialization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialization } from 'core/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Specialization])
  ],
  controllers: [SpecializationController],
  providers: [SpecializationService]
})
export class SpecializationModule {}
