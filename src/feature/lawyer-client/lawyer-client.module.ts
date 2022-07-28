import { Module } from '@nestjs/common';
import { LawyerClientService } from './lawyer-client.service';
import { LawyerClientController } from './lawyer-client.controller';
import { SharedModule } from 'core/shared/shared.module';
import { RepoService } from 'core/shared/service/repo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LawyerClient } from 'core/entities';

@Module({
  controllers: [LawyerClientController],
  providers: [LawyerClientService],
})
export class LawyerClientModule {}
