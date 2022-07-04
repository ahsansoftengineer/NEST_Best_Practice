import { Module } from '@nestjs/common';
import { ClassRoomService } from './class-room.service';
import { ClassRoomController } from './class-room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassRoom } from './entities/class-room.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ClassRoom]),
  ],
  controllers: [ClassRoomController],
  providers: [ClassRoomService]
})
export class ClassRoomModule {}
