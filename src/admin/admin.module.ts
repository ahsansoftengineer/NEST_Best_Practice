import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { User } from 'core/entities';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
