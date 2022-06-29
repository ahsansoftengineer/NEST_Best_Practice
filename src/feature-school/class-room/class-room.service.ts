import { Injectable } from '@nestjs/common';
import { CreateClassRoomDto } from './dto/create-class-room.dto';
import { UpdateClassRoomDto } from './dto/update-class-room.dto';

@Injectable()
export class ClassRoomService {
  create(createClassRoomDto: CreateClassRoomDto) {
    return 'This action adds a new classRoom';
  }

  findAll() {
    return `This action returns all classRoom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classRoom`;
  }

  update(id: number, updateClassRoomDto: UpdateClassRoomDto) {
    return `This action updates a #${id} classRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} classRoom`;
  }
}
