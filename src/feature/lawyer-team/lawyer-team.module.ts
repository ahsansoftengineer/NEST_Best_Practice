import { Module } from '@nestjs/common';
import { LawyerTeamService } from './lawyer-team.service';
import { LawyerTeamController } from './lawyer-team.controller';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy, RtStrategy } from 'auth/strategies';
import { SharedModule } from 'core/shared/shared.module';

@Module({
  imports: [JwtModule.register({})],
  controllers: [LawyerTeamController],
  providers: [LawyerTeamService,AtStrategy, RtStrategy, SharedModule],
})
export class LawyerTeamModule {}
