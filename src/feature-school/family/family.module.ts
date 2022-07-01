import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
import { FamilyController } from './family.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Family } from './entities/family.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Family]),
  ],
  controllers: [FamilyController],
  providers: [FamilyService]
})
export class FamilyModule {}
