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

  create(data: CreateClassRoomDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateClassRoomDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
}
