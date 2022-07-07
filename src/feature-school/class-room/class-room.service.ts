import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Subject } from 'feature-school/subject/entities/subject.entity';
import { Teacher } from 'feature-school/teacher/entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreateClassRoomDto } from './dto/create-class-room.dto';
import { UpdateClassRoomDto } from './dto/update-class-room.dto';
import { ClassRoom } from './entities/class-room.entity';

@Injectable()
export class ClassRoomService extends BaseService {
  constructor(
    @InjectRepository(ClassRoom) public repo: Repository<ClassRoom>,
    // @InjectRepository(Teacher) public  repoTecher: Repository<Teacher>,
    // @InjectRepository(Subject) public  repoSubject: Repository<Subject>,
  ) {super()}
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
