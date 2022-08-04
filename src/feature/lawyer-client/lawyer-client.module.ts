import { Module } from '@nestjs/common';
import { LawyerClientService } from './lawyer-client.service';
import { LawyerClientController } from './lawyer-client.controller';

@Module({
  controllers: [LawyerClientController],
  providers: [LawyerClientService],
})
export class LawyerClientModule {} 
