import { Module } from '@nestjs/common';
import { ClassRoomService } from './class-room.service';
import { ClassRoomController } from './class-room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassRoom } from './entities/class-room.entity';
import { Teacher } from 'feature-school/teacher/entities/teacher.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ClassRoom, Teacher]),
  ],
  controllers: [ClassRoomController],
  providers: [ClassRoomService]
})
export class ClassRoomModule {}
