import { Module } from '@nestjs/common';
import { LawyerCasesService } from './lawyer-cases.service';
import { LawyerCasesController } from './lawyer-cases.controller';

@Module({
  controllers: [LawyerCasesController],
  providers: [LawyerCasesService]
})
export class LawyerCasesModule {}
