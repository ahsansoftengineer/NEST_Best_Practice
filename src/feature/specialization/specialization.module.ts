import { Module } from '@nestjs/common';
import { SpecializationService } from './specialization.service';
import { SpecializationController } from './specialization.controller';
import { Specialization } from './entities/specialization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Specialization])
  ],
  controllers: [SpecializationController],
  providers: [SpecializationService]
})
export class SpecializationModule {}
