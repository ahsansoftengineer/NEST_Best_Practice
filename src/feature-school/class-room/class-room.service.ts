import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Repository } from 'typeorm';
import { CreateClassRoomDto, UpdateClassRoomDto } from './dto/create-class-room.dto';
import { ClassRoom } from './entities/class-room.entity';

@Injectable()
export class ClassRoomService extends BaseService {
  constructor(@InjectRepository(ClassRoom) public repo: Repository<ClassRoom>) {
    super()
  }
}
