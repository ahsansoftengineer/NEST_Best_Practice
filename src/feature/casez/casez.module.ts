import { Module } from '@nestjs/common';
import { CasezService } from './casez.service';
import { CasezController } from './casez.controller';

@Module({
  controllers: [CasezController],
  providers: [CasezService],
})
export class CasezModule {}
