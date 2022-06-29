import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
import { FamilyController } from './family.controller';

@Module({
  controllers: [FamilyController],
  providers: [FamilyService]
})
export class FamilyModule {}
