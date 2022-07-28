import { Module } from '@nestjs/common';
import { LawyerTeamService } from './lawyer-team.service';
import { LawyerTeamController } from './lawyer-team.controller';

@Module({
  controllers: [LawyerTeamController],
  providers: [LawyerTeamService]
})
export class LawyerTeamModule {}
