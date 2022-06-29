import { Module } from '@nestjs/common';
import { ClassRoomService } from './class-room.service';
import { ClassRoomController } from './class-room.controller';

@Module({
  controllers: [ClassRoomController],
  providers: [ClassRoomService]
})
export class ClassRoomModule {}
