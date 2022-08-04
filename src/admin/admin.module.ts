import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { User } from 'core/entities';
import { SharedModule } from 'core/shared/shared.module';

@Module({
  imports:[
    SharedModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
