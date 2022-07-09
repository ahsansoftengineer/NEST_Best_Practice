import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { ClassRoom } from './entities/class-room.entity';

@Injectable()
export class ClassRoomService extends BaseService {
  constructor(@InjectRepository(ClassRoom) public repo: Repository<ClassRoom>) {
    super()
  }
}
